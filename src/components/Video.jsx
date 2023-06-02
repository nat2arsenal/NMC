import { useState, useRef, useContext, useEffect } from 'react';

import { FaStepForward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { AppContext } from '../Context';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [counter, setCounter] = useState(3);
  const [mute, setMute] = useState(true);

  const { state, dispatch } = useContext(AppContext);
  const videoRef = useRef();

  //   useEffect to trigger another useEffect with the state 'playing' as dependency
  useEffect(() => {
    setPlaying(true);
  }, []);

  //   video progress bar update; identifying if skip button should appear; update skip button timer
  useEffect(() => {
    let videoTimers = getVideoTimers(videoRef);

    if (percentage < 100 && playing === true) {
      setTimeout(() => setPercentage((prev) => (prev += 1.5)), 130);
    }

    if (videoTimers.duration - videoTimers.current < 3.5) {
      setShowSkipButton(true);
      setCounter(Math.round(videoTimers.duration - videoTimers.current));
    }
  }, [playing, percentage, counter]);

  // function to get video timers
  const getVideoTimers = (video) => {
    return {
      current: video.current.currentTime,
      duration: video.current.duration,
    };
  };

  //   function to handle video click
  const handleVideoClick = () => {
    setPlaying(!playing);
    playing ? videoRef.current.pause() : videoRef.current.play();
    if (videoRef.current.currentTime === 0) {
      setPercentage(0);
      setShowSkipButton(false);
      setCounter(3);
    } else {
      setPercentage(percentage);
    }
  };

  //   function to handle video ending
  const handleVideoEnd = () => {
    setPlaying(false);
    dispatch({ type: 'CLOSE_VIDEO' });
  };

  //   function to handle clicking of skip button
  const handleSkip = () => {
    dispatch({ type: 'CLOSE_VIDEO' });
  };

  // function to handle clicking of speaker icon
  const handleVideoSound = () => {
    setMute(!mute);
  };

  return (
    <>
      {state.closeVideo ? null : (
        <div className="video-container">
          <video
            autoPlay={playing}
            muted={mute}
            onClick={handleVideoClick}
            ref={videoRef}
            onEnded={handleVideoEnd}
            id="nmc-video"
          >
            <source
              src="/assets/Intro video/AdformVideo.mp4"
              type="video/mp4"
            />
          </video>
          {mute ? (
            <div className="mute-icon" onClick={handleVideoSound}>
              <FaVolumeMute />
            </div>
          ) : (
            <div className="mute-icon" onClick={handleVideoSound}>
              <FaVolumeUp />
            </div>
          )}

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
            <button type="button" className="skip-button" onClick={handleSkip}>
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
