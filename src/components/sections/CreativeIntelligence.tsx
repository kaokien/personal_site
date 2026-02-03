'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  CameraControls,
  Sparkles,
  Float,
  Html,
} from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

// --- TYPES & DATA ---

type Proficiency = 'Beginner' | 'Intermediate' | 'Expert';

interface Tool {
  name: string;
  proficiency: Proficiency;
  description: string;
}

interface BrainLobeData {
  id: string;
  title: string;
  category: string;
  color: string;
  position: [number, number, number]; // Position of the lobe center
  geometryScale: [number, number, number]; // Scale to shape the cluster
  tools: Tool[];
}

const brainData: BrainLobeData[] = [
  {
    id: 'frontal-l',
    title: 'Language Models',
    category: 'Left Frontal Lobe',
    color: '#3b82f6', // Blue
    position: [-1.2, 0.5, 1],
    geometryScale: [1, 1, 1],
    tools: [
      {
        name: 'GPT-4',
        proficiency: 'Expert',
        description: 'Advanced reasoning & code generation.',
      },
      {
        name: 'Claude 3.5',
        proficiency: 'Expert',
        description: 'Context window analysis & writing.',
      },
      {
        name: 'Gemini 1.5',
        proficiency: 'Expert',
        description: 'Multimodal processing & speed.',
      },
    ],
  },
  {
    id: 'frontal-r',
    title: 'Code & Dev',
    category: 'Right Frontal Lobe',
    color: '#eab308', // Yellow
    position: [1.2, 0.5, 1],
    geometryScale: [1, 1, 1],
    tools: [
      {
        name: 'GitHub Copilot',
        proficiency: 'Expert',
        description: 'Real-time autocomplete & suggestions.',
      },
      {
        name: 'Cursor',
        proficiency: 'Expert',
        description: 'AI-native IDE workflow.',
      },
      {
        name: 'V0.dev',
        proficiency: 'Intermediate',
        description: 'Generative UI components.',
      },
    ],
  },
  {
    id: 'parietal-l',
    title: 'Creative AI',
    category: 'Left Parietal Lobe',
    color: '#ec4899', // Pink
    position: [-1.2, 1.5, -0.5],
    geometryScale: [0.9, 0.9, 0.9],
    tools: [
      {
        name: 'Midjourney',
        proficiency: 'Expert',
        description: 'High-fidelity image synthesis.',
      },
      {
        name: 'DALL-E 3',
        proficiency: 'Intermediate',
        description: 'Prompt adherence & text rendering.',
      },
      {
        name: 'Stable Diffusion',
        proficiency: 'Intermediate',
        description: 'Local control & fine-tuning.',
      },
    ],
  },
  {
    id: 'parietal-r',
    title: 'Data & Analytics',
    category: 'Right Parietal Lobe',
    color: '#a855f7', // Purple
    position: [1.2, 1.5, -0.5],
    geometryScale: [0.9, 0.9, 0.9],
    tools: [
      {
        name: 'Prophet',
        proficiency: 'Intermediate',
        description: 'Time-series forecasting.',
      },
      {
        name: 'AutoML',
        proficiency: 'Beginner',
        description: 'Automated model selection.',
      },
      {
        name: 'TensorFlow',
        proficiency: 'Beginner',
        description: 'Deep learning foundations.',
      },
    ],
  },
  {
    id: 'temporal',
    title: 'Speech & Audio',
    category: 'Temporal Lobe',
    color: '#06b6d4', // Cyan
    position: [0, -1, 0.5],
    geometryScale: [1.5, 0.8, 1],
    tools: [
      {
        name: 'Whisper',
        proficiency: 'Expert',
        description: 'Robust speech-to-text.',
      },
      {
        name: 'ElevenLabs',
        proficiency: 'Expert',
        description: 'Voice cloning & synthesis.',
      },
      {
        name: 'Descript',
        proficiency: 'Expert',
        description: 'Audio editing workflow.',
      },
    ],
  },
  {
    id: 'occipital',
    title: 'Computer Vision',
    category: 'Occipital Lobe',
    color: '#10b981', // Emerald
    position: [0, 0.5, -1.5],
    geometryScale: [1.2, 1.2, 0.8],
    tools: [
      {
        name: 'YOLO',
        proficiency: 'Intermediate',
        description: 'Real-time object detection.',
      },
      {
        name: 'OpenCV',
        proficiency: 'Intermediate',
        description: 'Image processing library.',
      },
      {
        name: 'Segment Anything',
        proficiency: 'Beginner',
        description: 'Zero-shot image segmentation.',
      },
    ],
  },
];

// --- 3D COMPONENTS ---

function LobeMesh({
  data,
  isActive,
  isHovered,
  onClick,
  onHover,
}: {
  data: BrainLobeData;
  isActive: boolean;
  isHovered: boolean;
  onClick: (e: THREE.Event) => void;
  onHover: (state: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle pulsing if active or hovered
      const time = state.clock.getElapsedTime();
      const pulsing = isActive || isHovered ? Math.sin(time * 3) * 0.05 : 0;

      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.05; // Subtle idle movement

      // Scale animation
      const targetScale = isActive || isHovered ? 1.1 : 1.0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(
          targetScale + pulsing,
          targetScale + pulsing,
          targetScale + pulsing
        ),
        0.1
      );
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.2}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={data.position} scale={data.geometryScale}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover(true);
          }}
          onPointerOut={() => {
            onHover(false);
          }}
        >
          {/* Using Icosahedron for that low-poly tech look */}
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive={data.color}
            emissiveIntensity={isActive ? 2 : isHovered ? 1.5 : 0.2}
            wireframe={true}
            transparent
            opacity={isActive ? 1 : isHovered ? 0.8 : 0.3}
            roughness={0.2}
            metalness={0.8}
          />
          {/* Inner Core for solidity */}
          <mesh scale={0.95}>
            <icosahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial
              color="#000000"
              roughness={0.5}
              metalness={0.5}
            />
          </mesh>
        </mesh>

        {/* Floating Label on Hover/Active */}
        {(isHovered || isActive) && (
          <Html
            position={[0, 1.2, 0]}
            center
            distanceFactor={10}
            zIndexRange={[100, 0]}
          >
            <div className="rounded-none border border-neutral-700 bg-neutral-950/80 px-3 py-1 font-mono text-xs tracking-wider whitespace-nowrap text-white uppercase backdrop-blur-md">
              <span style={{ color: data.color }}>{'//'}</span> {data.title}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

function Scene({
  activeLobeId,
  setActiveLobeId,
}: {
  activeLobeId: string | null;
  setActiveLobeId: (id: string | null) => void;
}) {
  const [hoveredLobeId, setHoveredLobeId] = useState<string | null>(null);
  const controlsRef = useRef<CameraControls>(null);

  // Handle camera movement when active lobe changes
  useEffect(() => {
    if (activeLobeId && controlsRef.current) {
      const lobe = brainData.find((d) => d.id === activeLobeId);
      if (lobe) {
        // Zoom to lobe
        controlsRef.current.setLookAt(
          lobe.position[0] * 1.5,
          lobe.position[1] * 1.5,
          lobe.position[2] + 4, // Eye pos
          lobe.position[0],
          lobe.position[1],
          lobe.position[2], // Target pos
          true // Animated
        );
      }
    } else if (controlsRef.current) {
      // Reset to center
      controlsRef.current.setLookAt(0, 0, 7, 0, 0, 0, true);
    }
  }, [activeLobeId]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={0.5} color="#4f46e5" />

      <group>
        {brainData.map((lobe) => (
          <LobeMesh
            key={lobe.id}
            data={lobe}
            isActive={activeLobeId === lobe.id}
            isHovered={hoveredLobeId === lobe.id}
            onClick={() =>
              setActiveLobeId(lobe.id === activeLobeId ? null : lobe.id)
            }
            onHover={(state) => setHoveredLobeId(state ? lobe.id : null)}
          />
        ))}

        {/* Central Connecting Core */}
        <mesh position={[0, 0, 0]} scale={0.5}>
          <dodecahedronGeometry />
          <meshStandardMaterial
            color="#333"
            emissive="#555"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </group>

      <Sparkles
        count={80}
        scale={6}
        size={2}
        speed={0.4}
        opacity={0.2}
        color="#ffffff"
      />

      <CameraControls
        ref={controlsRef}
        minDistance={3}
        maxDistance={12}
        dollySpeed={0.5}
        smoothTime={0.4}
      />
      {/* Auto-rotate only when no specific lobe is active to prevent fighting the camera setLookAt */}
      {!activeLobeId && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}
    </>
  );
}

// --- MAIN COMPONENT ---

export function CreativeIntelligence() {
  const [activeLobeId, setActiveLobeId] = useState<string | null>(null);
  const activeLobe = brainData.find((d) => d.id === activeLobeId);

  return (
    <section className="relative min-h-[800px] overflow-hidden bg-neutral-950 py-24 text-white">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 container mx-auto flex h-full flex-col px-4">
        {/* Header */}
        <div className="pointer-events-none relative z-20 mb-8 border-b border-neutral-800 pb-4">
          <h2 className="font-heading bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-4xl leading-none font-bold tracking-tighter text-transparent uppercase md:text-6xl">
            Digital Cortex
          </h2>
          <div className="mt-2 flex items-end justify-between">
            <p className="font-mono text-sm tracking-widest text-neutral-500 uppercase">
              {/* // Interactive Neural Map v3.0 */}
              Interactive Neural Map v3.0
            </p>
            <div className="hidden gap-4 font-mono text-[10px] text-neutral-600 uppercase md:flex">
              <span>Rotation: {activeLobeId ? 'LOCKED' : 'AUTO'}</span>
              <span>Zoom: ENABLED</span>
              <span>Modules: {brainData.length}</span>
            </div>
          </div>
        </div>

        {/* 3D Scene Wrapper */}
        <div className="relative h-[600px] w-full border-t border-b border-neutral-900 bg-neutral-900/10">
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <Scene
              activeLobeId={activeLobeId}
              setActiveLobeId={setActiveLobeId}
            />
          </Canvas>

          {/* INSTRUCTIONS OVERLAY (Bottom Center) */}
          {!activeLobeId && (
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="animate-pulse font-mono text-xs tracking-widest text-neutral-500 uppercase">
                [ Click a lobe to analyze ]
              </p>
            </div>
          )}
        </div>
      </div>

      {/* INFO PANEL SLIDE-OVER */}
      <AnimatePresence>
        {activeLobe && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLobeId(null)}
              className="absolute inset-0 z-30 cursor-pointer bg-black/60 backdrop-blur-[2px]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 z-40 w-full overflow-y-auto border-l border-neutral-800 bg-neutral-950 p-8 shadow-2xl md:w-[450px]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLobeId(null)}
                className="absolute top-6 right-6 text-neutral-500 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Content */}
              <div className="mt-12">
                <div className="mb-2 font-mono text-xs tracking-widest text-neutral-500 uppercase">
                  {activeLobe.category}
                </div>
                <h3
                  className="font-heading mb-6 text-4xl uppercase"
                  style={{ color: activeLobe.color }}
                >
                  {activeLobe.title}
                </h3>

                <div className="space-y-6">
                  {activeLobe.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="group border border-neutral-800 bg-neutral-900/30 p-4 transition-colors hover:border-neutral-600"
                    >
                      <div className="mb-2 flex items-start justify-between">
                        <h4 className="text-lg font-bold text-white uppercase">
                          {tool.name}
                        </h4>
                        <span
                          className={cn(
                            'border px-2 py-0.5 font-mono text-[10px] uppercase',
                            tool.proficiency === 'Expert'
                              ? 'border-primary text-primary'
                              : tool.proficiency === 'Intermediate'
                                ? 'border-neutral-500 text-neutral-400'
                                : 'border-neutral-700 text-neutral-600'
                          )}
                        >
                          {tool.proficiency}
                        </span>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-neutral-400">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveLobeId(null)}
                  className="mt-8 w-full border border-white/20 py-4 font-mono text-sm text-white uppercase transition-all hover:bg-white hover:text-black"
                >
                  Return to Overview
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
