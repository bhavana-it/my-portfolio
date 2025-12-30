import { useEffect, useMemo, useState } from "react";

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "Bhavana consistently delivered high-quality solutions and showed strong ownership of complex modules.",
        author: "Technical Lead"
      },
      {
        quote:
          "A reliable senior developer with excellent problem-solving skills and attention to detail.",
        author: "Project Manager"
      },
      {
        quote:
          "Strong full-stack mindset: balances clean UI with backend reliability and scalable architecture.",
        author: "Engineering Manager"
      },
      {
        quote:
          "Proactive communicator who keeps delivery predictable while maintaining high code quality.",
        author: "Product Owner"
      },
      {
        quote:
          "Quick to diagnose production issues and thorough with fixes—performance and stability improved noticeably.",
        author: "Senior Engineer"
      }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const rotationMs = 3200;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, rotationMs);

    return () => window.clearInterval(interval);
  }, [rotationMs, testimonials.length]);

  const onPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const onNext = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="reveal">
      <div className="container">
        <div className="section-header">
          <h3>What They Say</h3>
          <p className="text-muted">
            Feedback from technical leads, managers, and stakeholders.
          </p>
        </div>

        <div className="testimonials-slider" aria-roledescription="carousel">
          <div className="testimonials-viewport">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="card testimonial-card testimonials-slide"
                  aria-hidden={i !== index}
                >
                  <blockquote className="testimonial-quote">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="testimonial-author">– {t.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="testimonials-controls" aria-label="Testimonials controls">
            <button type="button" className="testimonials-arrow" onClick={onPrev} aria-label="Previous testimonial">
              <span className="testimonials-arrow-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M14.5 6.5L9 12l5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div className="testimonials-dots" aria-label="Testimonials pagination">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`testimonials-dot ${i === index ? "active" : ""}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <button type="button" className="testimonials-arrow" onClick={onNext} aria-label="Next testimonial">
              <span className="testimonials-arrow-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M9.5 6.5L15 12l-5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
