import { useCallback, useRef, useState } from "react";
import playwebflow from "../Assets/image/play-webflow.svg";
import video2 from "../Assets/video/video-2.mp4";

export function HeroSection() {
  const vidRef = useRef(null);
  const vidRef2 = useRef(null);
  const [isvidPlaying, setIsVidPlaying] = useState(true);
  const [isvid2Playing, setIsVid2Playing] = useState(true);

  const handlePlayVideo = useCallback(() => {
    if (!isvidPlaying) {
      vidRef?.current?.play();
    } else vidRef?.current?.pause();
    setIsVidPlaying((prevPaused) => !prevPaused);
  }, [isvidPlaying]);

  const handlePlayVideo2 = useCallback(
    (e) => {
      if (!isvid2Playing) {
        vidRef2?.current?.play();
      } else vidRef2?.current?.pause();
      setIsVid2Playing((prevPaused) => !prevPaused);
    },
    [isvid2Playing]
  );

  return (
    <>
      <section className="hero-section">
        <div>
          <div className="slider">
            <div className="slide active">
              <video
                id="sliderVideo"
                className="slider-video"
                autoPlay
                loop
                muted
                ref={vidRef}
              >
                <source src={video2} type="video/mp4" />
              </video>
              <div className="slide-content">
                <div className="slider-left-block">
                  <h1 className="slider-heading">Playbox lottery</h1>
                  <div className="hero-hours-block">
                    <span>2</span> hours <span>4</span> mins <span>27</span>{" "}
                    secs
                  </div>
                </div>
                <div className="slider-right-block">
                  <button
                    className="play-btn"
                    id="slider-video-btn"
                    onClick={handlePlayVideo}
                  >
                    <img src={playwebflow} alt="" className="play-icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <video
                id="sliderVideo2"
                className="slider-video"
                autoPlay
                loop
                muted
                ref={vidRef2}
              >
                <source src={video2} type="video/mp4" />
              </video>
              <div className="slide-content">
                <div className="slider-left-block">
                  <h1 className="slider-heading">Playbox Subscribe</h1>
                  <div className="hero-btn-block">
                    <a href="#" className="primary-btn">
                      Exclusive content
                    </a>
                    <a href="#" className="primary-btn">
                      Value hook 2
                    </a>
                  </div>
                </div>
                <div className="slider-right-block">
                  <button
                    className="play-btn"
                    id="slider-video-btn2"
                    onClick={handlePlayVideo2}
                  >
                    <img src={playwebflow} alt="" className="play-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
