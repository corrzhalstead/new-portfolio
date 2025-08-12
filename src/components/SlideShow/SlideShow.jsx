import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./SlideShow.module.css";

function SlideShow({
  slides, // [{src, alt, title?, caption?}]
  autoPlay = true,
  interval = 3500,
  startIndex = 0,
  loop = true,
  ariaLabel = "Project screenshots",
  onSlideChange,
}) {
  const [index, setIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const goTo = useCallback(
    (i) => {
      const next = loop
        ? (i + slides.length) % slides.length
        : Math.min(Math.max(i, 0), slides.length - 1);
      setIndex(next);
      onSlideChange?.(next);
    },
    [slides.length, loop, onSlideChange]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay (respect pause/hover/focus)
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, isPaused, next, interval]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // simple touch swipe
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    const start = (e) => (startX = e.touches[0].clientX);
    const move = (e) => {
      const dx = e.touches[0].clientX - startX;
      if (Math.abs(dx) > 60) {
        dx < 0 ? next() : prev();
        startX = e.touches[0].clientX; // avoid multi-swipe
      }
    };
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
    };
  }, [next, prev]);

  return (
    <section
      className={styles.carousel}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className={styles.viewport}>
        <ul
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <li className={styles.slide} key={i}>
              <img
                src={s.src}
                alt={s.alt || s.title || `Screenshot ${i + 1}`}
                loading={i === index ? "eager" : "lazy"}
                draggable="false"
              />
              {(s.title || s.caption) && (
                <div className={styles.caption} aria-live="polite">
                  {s.title && <strong>{s.title}</strong>}
                  {s.caption && <span>{s.caption}</span>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`${styles.nav} ${styles.prev}`}
        onClick={prev}
        aria-label="Previous slide"
      >
        ◀
      </button>
      <button
        className={`${styles.nav} ${styles.next}`}
        onClick={next}
        aria-label="Next slide"
      >
        ▶
      </button>

      <div className={styles.dots} role="tablist" aria-label="Slide selector">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default SlideShow;
