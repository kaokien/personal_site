'use client';

import { useState, useEffect, useRef } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  className?: string;
}

export function VideoPlayer({ url, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<unknown>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !videoRef.current) return;

    const video = videoRef.current;
    let hls: import('hls.js').default | null = null;

    const initHls = async () => {
      // Dynamically import hls.js to avoid SSR/HMR issues
      const Hls = (await import('hls.js')).default;

      // Cleanup previous HLS instance
      if (hlsRef.current) {
        (hlsRef.current as import('hls.js').default).destroy();
        hlsRef.current = null;
      }

      // Check if HLS is supported
      if (Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          setError(null);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                setError('Network error loading video');
                hls?.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                setError('Media error - attempting recovery');
                hls?.recoverMediaError();
                break;
              default:
                setError('Failed to load video');
                hls?.destroy();
                break;
            }
          }
        });

        hlsRef.current = hls;
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
        });
        video.addEventListener('error', () => {
          setError('Failed to load video');
        });
      } else {
        setError('HLS playback not supported in this browser');
      }
    };

    initHls();

    return () => {
      if (hlsRef.current) {
        (hlsRef.current as import('hls.js').default).destroy();
        hlsRef.current = null;
      }
    };
  }, [isMounted, url]);

  if (!isMounted) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
        <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-black dark:border-neutral-800 ${className || ''}`}
    >
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Loader2 className="h-8 w-8 animate-spin text-white" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/80 text-white">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <p className="text-sm">{error}</p>
        </div>
      )}
      <video ref={videoRef} className="h-full w-full" controls playsInline />
    </div>
  );
}
