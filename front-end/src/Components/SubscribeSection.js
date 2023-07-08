import playwebflow from "../Assets/image/play-webflow.svg";
import video1 from "../Assets/video/video-1.mp4";
import video2 from "../Assets/video/video-2.mp4";
import video3 from "../Assets/video/card3.mp4";
import video4 from "../Assets/video/card4.mp4";
import video5 from "../Assets/video/card5.mp4";
import { useCallback, useRef, useState } from "react";

export function SubscribeSection() {
  const vidRef = useRef(null);
  const vidRef2 = useRef(null);
  const vidRef3 = useRef(null);
  const vidRef4 = useRef(null);
  const vidRef5 = useRef(null);
  const [isvidPlaying, setIsVidPlaying] = useState(true);
  const [isvid2Playing, setIsVid2Playing] = useState(true);
  const [isvid3Playing, setIsVid3Playing] = useState(true);
  const [isvid4Playing, setIsVid4Playing] = useState(true);
  const [isvid5Playing, setIsVid5Playing] = useState(true);

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
  const handlePlayVideo3 = useCallback(
    (e) => {
      if (!isvid3Playing) {
        vidRef3?.current?.play();
      } else vidRef3?.current?.pause();
      setIsVid3Playing((prevPaused) => !prevPaused);
    },
    [isvid3Playing]
  );
  const handlePlayVideo4 = useCallback(
    (e) => {
      if (!isvid4Playing) {
        vidRef4?.current?.play();
      } else vidRef4?.current?.pause();
      setIsVid4Playing((prevPaused) => !prevPaused);
    },
    [isvid4Playing]
  );
  const handlePlayVideo5 = useCallback(
    (e) => {
      if (!isvid5Playing) {
        vidRef5?.current?.play();
      } else vidRef5?.current?.pause();
      setIsVid5Playing((prevPaused) => !prevPaused);
    },
    [isvid5Playing]
  );

  return (
    <section className="subscribe-section">
      <div className="subscribe-inner">
        <button className="primary-btn">Playbox Lottery</button>
        <div className="subscribe-slider-block">
          <h2 className="section-heading">Playbox Subscription</h2>
          <div className="card-slider">
            <div className="video-card mb-3">
              <video
                id="videoCard1"
                className="card-video"
                autoPlay
                loop
                muted
                ref={vidRef}
              >
                <source src={video1} type="video/mp4" />
              </video>
              <div className="video-card-btn-block">
                <button
                  className="video-card-play-btn"
                  id="video-card-play-1"
                  onClick={handlePlayVideo}
                >
                  <img
                    src={playwebflow}
                    alt=""
                    className="vide-card-play-icon"
                  />
                </button>
              </div>
            </div>
            <div className="video-card mb-3">
              <video id="videoCard2" className="card-video" autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
              <div className="video-card-btn-block">
                <button
                  className="video-card-play-btn"
                  id="video-card-play-2"
                  onClick={handlePlayVideo2}
                >
                  <img
                    src={playwebflow}
                    alt=""
                    className="vide-card-play-icon"
                  />
                </button>
              </div>
            </div>
            <div className="video-card mb-3">
              <video
                id="videoCard3"
                className="card-video"
                autoPlay
                loop
                muted
                ref={vidRef3}
              >
                <source src={video3} type="video/mp4" />
              </video>
              <div className="video-card-btn-block">
                <button
                  className="video-card-play-btn"
                  id="video-card-play-3"
                  onClick={handlePlayVideo3}
                >
                  <img
                    src={playwebflow}
                    alt=""
                    className="vide-card-play-icon"
                  />
                </button>
              </div>
            </div>
            <div className="video-card mb-3">
              <video
                id="videoCard4"
                className="card-video"
                autoPlay
                loop
                muted
                ref={vidRef4}
              >
                <source src={video4} type="video/mp4" />
              </video>
              <div className="video-card-btn-block">
                <button
                  className="video-card-play-btn"
                  id="video-card-play-4"
                  onClick={handlePlayVideo4}
                >
                  <img
                    src={playwebflow}
                    alt=""
                    className="vide-card-play-icon"
                  />
                </button>
              </div>
            </div>
            <div className="video-card mb-3">
              <video
                id="videoCard5"
                className="card-video"
                autoPlay
                loop
                muted
                ref={vidRef5}
              >
                <source src={video5} type="video/mp4" />
              </video>
              <div className="video-card-btn-block">
                <button
                  className="video-card-play-btn"
                  id="video-card-play-5"
                  onClick={handlePlayVideo5}
                >
                  <img
                    src={playwebflow}
                    alt=""
                    className="vide-card-play-icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <button className="primary-btn">Playbox Lottery</button>
        </div>
      </div>
    </section>
  );
}
