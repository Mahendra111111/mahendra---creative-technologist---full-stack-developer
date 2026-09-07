import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<string>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered elements for cursor metadata
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const isButton = target.closest('button, a, input, textarea, select');

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'VIEW_PROJECT') {
          setCursorType('project');
          setCursorText('VIEW PROJECT');
        } else if (type === '3D_EXPLORE') {
          setCursorType('explore');
          setCursorText('EXPLORE');
        } else if (type === 'HOVER_EXPAND') {
          setCursorType('expand');
          setCursorText('');
        }
      } else if (isButton) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isProject = cursorType === 'project';
  const isExplore = cursorType === 'explore';
  const isPointer = cursorType === 'pointer';
  const isExpand = cursorType === 'expand';

  return (
    <aside
      id="custom-cursor-container"
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-9999 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {isProject || isExplore ? (
        <div className="relative -top-10 -left-10 w-20 h-20 rounded-full bg-[#0000EE] text-white flex flex-col items-center justify-center text-[10px] font-mono font-bold uppercase tracking-wider text-center p-1 shadow-xl leading-tight border border-white/20 scale-100 transition-all duration-200">
          <span>{cursorText.split(' ')[0]}</span>
          <span>{cursorText.split(' ')[1] || ''}</span>
        </div>
      ) : isPointer || isExpand ? (
        <div className="relative -top-4 -left-4 w-8 h-8 rounded-full border-2 border-[#0000EE] bg-[#0000EE]/15 backdrop-blur-[1px] transition-all duration-150"></div>
      ) : (
        <div className="relative -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#000000] border border-white/40 transition-all duration-100"></div>
      )}
    </aside>
  );
};
