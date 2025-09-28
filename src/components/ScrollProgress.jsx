import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  const [rightOffset, setRightOffset] = useState(8); // px from right edge
  const [markerHeight, setMarkerHeight] = useState(16);

  useEffect(() => {
    function onSlide(e) {
      const { activeIndex, totalSlides } = e.detail || {};
      setActive(typeof activeIndex === 'number' ? activeIndex : 0);
      setTotal(typeof totalSlides === 'number' ? totalSlides : 0);
    }

    window.addEventListener('aboutSlideChange', onSlide);
    return () => window.removeEventListener('aboutSlideChange', onSlide);
  }, []);

  // Measure vertical scrollbar width. If invisible (overlay scrollbars), fallback to small offset.
  useEffect(() => {
    function measure() {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS
      document.body.appendChild(outer);
      const widthNoScroll = outer.clientWidth;
      // force scrollbar
      outer.style.overflow = 'scroll';
      const inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
      const widthWithScroll = inner.clientWidth;
      outer.parentNode.removeChild(outer);

      const scrollbarWidth = Math.max(0, widthNoScroll - widthWithScroll);

      // If scrollbarWidth is 0 (overlay scrollbars), place marker near edge (8px)
      if (scrollbarWidth > 0) {
        // place marker centered in scrollbar track
        const markerW = 10;
        setRightOffset(Math.max(6, Math.round((scrollbarWidth - markerW) / 2)));
      } else {
        setRightOffset(8);
      }

      // compute marker height proportional to viewport and total slides
      const h = Math.max(12, Math.floor(window.innerHeight / Math.max(3, total * 3)));
      setMarkerHeight(h);
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [total]);

  if (!total) return null;

  // compute vertical position mapped to viewport
  const padding = 12; // px top/bottom padding
  const maxTop = window.innerHeight - markerHeight - padding * 2;
  const top = Math.round((active / Math.max(1, total - 1)) * maxTop) + padding;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 z-50 hidden md:block pointer-events-none"
      style={{ right: rightOffset, height: '100vh', width: '0px' }}
    >
      <div
        className="absolute rounded-full bg-green-500/95 shadow-lg"
        style={{
          width: 10,
          height: markerHeight,
          right: 0,
          top,
          transition: 'top 0.3s cubic-bezier(.2,.9,.3,1), height 0.25s',
          opacity: 0.98,
        }}
      />
    </div>
  );
}

