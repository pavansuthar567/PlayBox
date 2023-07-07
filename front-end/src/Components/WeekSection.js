import { useCallback, useRef, useState } from "react";
import playwebflow from "../Assets/image/play-webflow.svg";
import video2 from "../Assets/video/video-2.mp4";

export function WeekSection() {
  const vidRef = useRef(null);
  const [isvidPlaying, setIsVidPlaying] = useState(true);

  const handlePlayVideo = useCallback(() => {
    if (!isvidPlaying) {
      vidRef?.current?.play();
    } else vidRef?.current?.pause();
    setIsVidPlaying((prevPaused) => !prevPaused);
  }, [isvidPlaying]);

  return (
    <section className="week-section">
      <div className="week-video-block">
        <video
          id="weekVideo"
          className="slider-video"
          autoPlay
          loop
          muted
          ref={vidRef}
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className="week-inner">
        <div className="week-content">
          <h2 className="section-heading">This weeks prize</h2>
          <span className="big-para color-red">Girls name</span>
          <p className="para">
            Enjoy a night of 5* luxury, with dinner at nice place and an
            overnight stay at Hotel swish.
          </p>
        </div>
      </div>
      <div className="week-play-btn-block">
        <button
          className="play-btn week-play-btn"
          id="week-video-btn"
          onClick={handlePlayVideo}
        >
          <img src={playwebflow} alt="" className="play-icon" />
        </button>
      </div>
    </section>
  );
}
