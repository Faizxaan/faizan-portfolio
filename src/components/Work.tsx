import { useState, useEffect, useRef, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Voice of Artist",
    category: "Storytelling Platform",
    tools: "React.js, Node.js, Responsive UI, Admin CMS",
    image: "/images/voice-of-artist.png",
    url: "https://www.voiceofartist.com/",
  },
  {
    title: "Sahaj Agro Industries",
    category: "Agri-Business Website",
    tools: "HTML5, CSS3, Vanilla JS, GSAP, ScrollTrigger, Custom SVGs",
    image: "/images/sahaj-agro.png",
    url: "https://sahaj-agro-web.vercel.app/",
  },
  {
    title: "Ensol Industries",
    category: "Industrial Infrastructure",
    tools: "HTML, CSS, JavaScript, Vercel",
    image: "/images/ensol-industries.png",
    url: "https://sahaj-agro-web.vercel.app/",
  },
];

const AUTO_SCROLL_MS = 5000;

const Work = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Auto-scroll ──
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, AUTO_SCROLL_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // ── Navigation ──
  const go = (index: number) => {
    setActive(index);
    startTimer(); // reset timer on manual nav
  };

  const prev = () => go(active === 0 ? projects.length - 1 : active - 1);
  const next = () => go(active === projects.length - 1 ? 0 : active + 1);

  const p = projects[active];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-carousel">
          {/* Left arrow */}
          <button
            className="work-arrow work-arrow--left"
            onClick={prev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          {/* Right arrow */}
          <button
            className="work-arrow work-arrow--right"
            onClick={next}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slide content — no translateX, just swap content */}
          <div className="work-slide" key={active}>
            <div className="work-slide__info">
              <span className="work-slide__number">
                0{active + 1}
              </span>

              <div className="work-slide__details">
                <h4 className="work-slide__title">{p.title}</h4>
                <p className="work-slide__category">{p.category}</p>

                <div className="work-slide__tools">
                  <span className="work-slide__tools-label">Tools & Features</span>
                  <p>{p.tools}</p>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-slide__btn"
                  data-cursor="disable"
                >
                  Visit Site <MdArrowOutward />
                </a>
              </div>
            </div>

            <div className="work-slide__image">
              <a href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                <img src={p.image} alt={p.title} />
                <div className="work-slide__image-overlay">
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>

          {/* Dots */}
          <div className="work-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`work-dot ${i === active ? "work-dot--active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Go to project ${i + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
