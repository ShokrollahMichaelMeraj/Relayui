import { useEffect, useRef } from 'react';

export function InteractiveNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node configuration
    const spacing = 80;
    const nodeRadius = 1.5;
    const connectionDistance = 150; // Max distance for connections

    // Create nodes
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      waveOffset: number;
    }

    const nodes: Node[] = [];
    for (let x = spacing; x < canvas.width; x += spacing) {
      for (let y = spacing; y < canvas.height; y += spacing) {
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          waveOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    // Animation loop
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      // Heartbeat wave effect
      const heartbeat = Math.sin(time * 2) * 0.5 + 0.5; // Pulsing effect 0-1
      const wave = Math.sin(time) * 5; // Slower wave motion

      // Update node positions
      nodes.forEach((node) => {
        // Distance from center for radial heartbeat
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(node.baseX - centerX, 2) + Math.pow(node.baseY - centerY, 2)
        );
        
        // Create wave that emanates from center
        const radialWave = Math.sin(time * 2 - distanceFromCenter * 0.01) * 3;
        
        // Individual node subtle motion
        const waveX = Math.sin(time + node.waveOffset) * 2;
        const waveY = Math.cos(time + node.waveOffset * 1.3) * 2;

        // Update node position with heartbeat effect
        node.x = node.baseX + waveX + radialWave * 0.3;
        node.y = node.baseY + waveY + radialWave * 0.3;
      });

      // Draw connections between nearby nodes
      nodes.forEach((nodeA, indexA) => {
        nodes.forEach((nodeB, indexB) => {
          if (indexA >= indexB) return; // Avoid duplicate lines
          
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / connectionDistance) * 0.15;
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(45, 90, 158, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw nodes on top of connections
      nodes.forEach((node) => {
        // Distance from center for radial heartbeat
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(node.baseX - centerX, 2) + Math.pow(node.baseY - centerY, 2)
        );

        // Draw node with pulsing opacity
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        
        // Pulsing opacity based on heartbeat and radial wave
        const pulseIntensity = Math.sin(time * 2 - distanceFromCenter * 0.01) * 0.3 + 0.5;
        const opacity = 0.3 + pulseIntensity * 0.5;
        
        ctx.fillStyle = `rgba(45, 90, 158, ${opacity})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 1, zIndex: 0 }}
    />
  );
}