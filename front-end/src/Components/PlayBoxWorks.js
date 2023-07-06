import { useCallback, useRef, useState } from "react";
import playwebflow from "../Assets/image/play-webflow.svg";
import video2 from "../Assets/video/video-2.mp4";

const PlayBoxWorks = () => {
  const vidRef = useRef(null);
  const [isvidPlaying, setIsVidPlaying] = useState(true);

  const handlePlayVideo = useCallback(() => {
    if (!isvidPlaying) {
      vidRef?.current?.play();
    } else vidRef?.current?.pause();
    setIsVidPlaying((prevPaused) => !prevPaused);
  }, [isvidPlaying]);

  return (
    <>
      <section className="video-section">
        <div>
          <video
            id="sectionVideo"
            className="video-block"
            autoPlay
            loop
            muted
            ref={vidRef}
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div className="video-btn-block">
          <button
            className="play-btn"
            id="video-play-btn"
            onClick={handlePlayVideo}
          >
            <img src={playwebflow} alt="" className="play-icon" />
          </button>
        </div>
      </section>
      <section className="how-section">
        <div className="how-inner">
          <h2 className="section-heading text-dark mb-100">
            How PlayBox Works?
          </h2>
          <div className="how-para-block">
            <p className="para text-dark mb-100">
              Lottery Explanation here of how it works. No more than 3 lines of
              text if possible.
            </p>
            <p className="para text-dark">
              Subscription Explanation here of how it works. No more than 3
              lines of text if possible.
            </p>
          </div>
          <div className="how-btn-block">
            <a href="#" className="primary-btn">
              Exclusive content
            </a>
            <a href="#" className="primary-btn">
              Value hook 2
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayBoxWorks;
