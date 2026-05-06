import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After image (full, underneath) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100vw" }}
          loading="lazy"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels — fade based on slider position */}
      <div
        className="absolute top-4 left-4 z-20 bg-[#2D5F5D] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-opacity"
        style={{ opacity: sliderPos > 10 ? 1 : 0 }}
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-4 right-4 z-20 bg-[#2D5F5D] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-opacity"
        style={{ opacity: sliderPos < 90 ? 1 : 0 }}
      >
        {afterLabel}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
