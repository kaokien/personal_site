'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
// import type { ReactPlayerProps } from 'react-player';

interface ReactPlayerProps {
  url: string;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  light?: boolean | string;
  volume?: number;
  muted?: boolean;
  playbackRate?: number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  progressInterval?: number;
  playsinline?: boolean;
  pip?: boolean;
  stopOnUnmount?: boolean;
  fallback?: React.ReactElement;
  wrapper?:
    | React.ElementType
    | { render: (props: unknown) => React.ReactElement };
  config?: unknown;
  onReady?: (player: unknown) => void;
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onBuffer?: () => void;
  onBufferEnd?: () => void;
  onEnded?: () => void;
  onError?: (
    error: unknown,
    data?: unknown,
    hlsInstance?: unknown,
    hlsGlobal?: unknown
  ) => void;
  onDuration?: (duration: number) => void;
  onSeek?: (seconds: number) => void;
  onProgress?: (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => void;
  onEnablePIP?: () => void;
  onDisablePIP?: () => void;
}

// Dynamically import ReactPlayer with explicit casting to avoid type processing errors with dynamic()
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
}) as unknown as React.ComponentType<ReactPlayerProps>;

interface VideoPlayerProps {
  url: string;
  className?: string;
}

export function VideoPlayer({ url, className }: VideoPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

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
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={false}
        config={{
          file: {
            forceHLS: true,
          },
        }}
      />
    </div>
  );
}
