import { useState, useRef, useContext, useEffect } from 'react';

import { FaStepForward, FaVolumeMute } from 'react-icons/fa';
import { AppContext } from '../Context';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [counter, setCounter] = useState(3);

  const { closeVideo, setCloseVideo } = useContext(AppContext);
  const videoRef = useRef();

  const handleVideoClick = () => {
    setPlaying(!playing);

    playing ? videoRef.current.pause() : videoRef.current.play();
    if (videoRef.current.currentTime < 0.01) {
      setPercentage(0);
      setShowSkipButton(false);
      setCounter(3);
    } else {
      setPercentage(percentage);
    }
  };

  //   function to handle video ending
  const handleVideoDone = () => {
    setPlaying(false);
  };

  //   function to handle clicking of skip button
  const handleSkip = () => {
    setCloseVideo(true);
  };

  //   useEffect to trigger another useEffect with the state 'playing' as dependency
  useEffect(() => {
    setPlaying(true);
  }, []);

  //   video progress bar update; identifying if skip button should appear
  useEffect(() => {
    if (percentage < 100 && playing === true) {
      setTimeout(() => setPercentage((prev) => (prev += 1.5)), 124);
    }

    if (percentage > 63) {
      setShowSkipButton(true);
    }
  }, [playing, percentage]);

  //   skip button counter update
  useEffect(() => {
    if (showSkipButton && counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [showSkipButton, counter]);

  return (
    <>
      {closeVideo ? null : (
        <div className="video-container">
          <video
            autoPlay
            muted
            onClick={handleVideoClick}
            ref={videoRef}
            onEnded={handleVideoDone}
          >
            <source
              src="/src/assets/Intro video/AdformVideo.mp4"
              type="video/mp4"
            />
          </video>
          <div className="mute-icon" onClick={handleVideoClick}>
            <FaVolumeMute />
          </div>
          <div
            className="progress-bar"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
          {playing ? (
            <div className="pause-button">
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="play-button"></div>
          )}
          {showSkipButton ? (
            <button className="skip-button" onClick={handleSkip}>
              <div className="skip-button--counter">
                {counter > 0 ? `${counter}` : null}
              </div>
              <div className="skip-button--text">Skip Video </div>
              <span className="skip-button--icon">
                <FaStepForward />
              </span>
            </button>
          ) : null}
        </div>
      )}
    </>
  );
}
