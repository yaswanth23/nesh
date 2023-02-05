import { Fragment, memo, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import BtnAudio from "../../assets/audio/btn_click.mp3";
import "./navigation.styles.css";

const Navigation = (props) => {
  const audioRef = useRef();
  // const audio = props.audio;
  // const isPlaying = !audio.paused;

  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  return (
    <Fragment>
      <div className="bg">
        <div className="logo-container">
          <span onMouseEnter={handleMouseEnter}>
            <Link to="/" className="logo">
              Nesh
            </Link>
            <audio preload="auto" ref={audioRef} src={BtnAudio}></audio>
          </span>
          {/* <div
            className="spectrum"
            onMouseEnter={handleMouseEnter}
            onClick={props.handleClick}
          >
            <div
              className={isPlaying ? "audio-anlyzer" : "audio-anlyzer-paused"}
            >
              <i></i>
              <i></i>
            </div>
          </div> */}
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default memo(Navigation);
