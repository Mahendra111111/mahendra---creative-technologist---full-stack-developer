import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  currentSection?: string;
  isMobile?: boolean;
}

export const Scene3D: React.FC<Scene3DProps> = ({ currentSection = 'hero', isMobile = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x0000ee, 2.5);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x222222, 1.5);
    dirLight2.position.set(-5, -4, -2);
    scene.add(dirLight2);

    // Procedural Monolith & Architectural Blocks Group
    const blocksGroup = new THREE.Group();
    masterGroup.add(blocksGroup);

    // Core architectural blocks (representing modular code & architecture)
    const blockCount = isMobile ? 12 : 24;
    const blocks: THREE.Mesh[] = [];
    const blockOriginalPositions: THREE.Vector3[] = [];
    const blockScatterPositions: THREE.Vector3[] = [];

    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const wireGeo = new THREE.EdgesGeometry(cubeGeo);

    const solidMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.3,
      metalness: 0.8,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x0000ee,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x000088,
      emissiveIntensity: 0.4
    });

    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0x0000ee,
      linewidth: 1,
      transparent: true,
      opacity: 0.7
    });

    for (let i = 0; i < blockCount; i++) {
      const isAccent = i % 5 === 0;
      const mesh = new THREE.Mesh(cubeGeo, isAccent ? accentMaterial : solidMaterial);
      
      // Wireframe overlay for brutalist technical feel
      const wireframe = new THREE.LineSegments(wireGeo, wireMaterial);
      mesh.add(wireframe);

      // Arrange in an architectonic stepped cluster
      const angle = (i / blockCount) * Math.PI * 2;
      const radius = 1.0 + (i % 3) * 0.45;
      const y = ((i % 5) - 2) * 0.55;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.6;

      mesh.position.set(x, y, z);
      mesh.scale.set(
        0.6 + (i % 4) * 0.25,
        0.5 + (i % 3) * 0.35,
        0.6 + (i % 2) * 0.3
      );

      blockOriginalPositions.push(new THREE.Vector3(x, y, z));
      blockScatterPositions.push(
        new THREE.Vector3(
          x * 2.2 + (Math.random() - 0.5) * 1.5,
          y * 2.0 + (Math.random() - 0.5) * 1.2,
          z * 2.2 + (Math.random() - 0.5) * 1.2
        )
      );

      blocks.push(mesh);
      blocksGroup.add(mesh);
    }

    // Interconnecting Wireframe Polyhedron / Node Ring
    const icosaGeo = new THREE.IcosahedronGeometry(2.4, isMobile ? 0 : 1);
    const icosaEdges = new THREE.EdgesGeometry(icosaGeo);
    const icosaWireframe = new THREE.LineSegments(
      icosaEdges,
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 })
    );
    masterGroup.add(icosaWireframe);

    // Floating Data Particle Cloud
    const particleCount = isMobile ? 40 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      const r = 2.2 + Math.random() * 2.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[p * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[p * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[p * 3 + 2] = r * Math.cos(phi);
      particleScales[p] = Math.random() * 0.04 + 0.02;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMat = new THREE.PointsMaterial({
      color: 0x0000ee,
      size: 0.07,
      transparent: true,
      opacity: 0.8
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleSystem);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.8;
      targetMouseY = y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Integration & Morph Target calculations
    let scrollProgress = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Base rotations
      masterGroup.rotation.y = elapsedTime * 0.12 + currentMouseX * 0.5;
      masterGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 + currentMouseY * 0.35;
      icosaWireframe.rotation.y = -elapsedTime * 0.08;
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Section morphing transitions:
      // Hero (0): Compact monolithic structure
      // Services (0.25): Exploded modular components
      // Projects (0.50): Interconnected planar matrix
      // About (0.75): Minimal architectural prism
      // Contact (1.0): Unified singularity
      const scatterAmount = Math.sin(scrollProgress * Math.PI) * 0.8;
      
      blocks.forEach((mesh, index) => {
        const orig = blockOriginalPositions[index];
        const scatter = blockScatterPositions[index];
        
        // Lerp between original cluster and scattered exploded components
        mesh.position.lerpVectors(orig, scatter, scatterAmount);

        // Subtle individual breathing animation
        mesh.rotation.x = Math.sin(elapsedTime * 0.4 + index) * 0.2;
        mesh.rotation.y = Math.cos(elapsedTime * 0.3 + index) * 0.2;
      });

      // Camera parallax depth response
      camera.position.x = currentMouseX * 0.4;
      camera.position.y = currentMouseY * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Memory cleanup
      blocks.forEach((m) => {
        m.geometry.dispose();
      });
      cubeGeo.dispose();
      wireGeo.dispose();
      icosaGeo.dispose();
      particleGeo.dispose();
      solidMaterial.dispose();
      accentMaterial.dispose();
      wireMaterial.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      id="hero-3d-viewport"
      data-cursor="3D_EXPLORE"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[460px] md:h-[580px] lg:h-[650px] select-none cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D architectural procedural sculpture representing digital systems and software engineering"
      role="img"
    >
      {/* Editorial floating tech coordinate overlay */}
      <div className="absolute top-4 right-4 pointer-events-none text-[10px] font-mono tracking-wider text-[#555555] uppercase border border-[#000000]/15 px-2.5 py-1 bg-[#DFDDD9]/60 backdrop-blur-xs flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0000EE] animate-pulse"></span>
        <span>SYS.3D // WEBGL_CORE</span>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono tracking-tight text-[#000000] border-l-2 border-[#0000EE] pl-2 bg-[#EBE9E4]/80 backdrop-blur-xs">
        <div>PROCEDURAL ARTIFACT // PARALLAX ON</div>
        <div className="text-[9px] text-[#555555]">DRAG / MOVE TO ROTATE</div>
      </div>
    </div>
  );
};
