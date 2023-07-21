import { SetStateAction, useEffect, useReducer, useRef, useState } from "react";
import classes from "./clock.module.scss";

import useClock from "../../hooks/useClock";
import Head from "next/head";

const Clock = () => {
  const [state, dispatch] = useClock();
  const audioPlayer = useRef<HTMLVideoElement | null>(null);
  const [soundPath, setSoundPath] = useState("./sound-toggle.mp3");

  const { minutes, seconds, isRunning, counter } = state;
  useEffect(() => {
    if (isRunning) {
      let intervalID: any;

      intervalID = setInterval(() => {
        if (seconds < 1 && minutes < 1) {
          new Notification("The Timer is over");
          dispatch({
            type: "SET_COUNTER",
            payload: undefined,
          });
        }

        dispatch({
          type: "SET_TIMER",
          payload: undefined,
        });
      }, 1000);

      return () => {
        clearInterval(intervalID);
      };
    }
  }, [isRunning, minutes, seconds, dispatch]);

  const minutesText = minutes.toString().padStart(2, "0");
  const secondsText = seconds.toString().padStart(2, "0");
  const buttonText = isRunning ? "PAUSE" : "PLAY";

  let counterText = counter.current === "focus" && `#${counter.focuses} Focus`;
  if (counter.current !== "focus") counterText = `#${counter.breaks - 1} Break`;

  const buttonHandler = () => {
    dispatch({
      type: "SET_IS_RUNNING",
      payload: undefined,
    });
    if (audioPlayer.current !== null) {
      audioPlayer.current.volume = 0.6;
      audioPlayer.current.play();
    }
  };

  return (
    <>
      <div className={classes.clock + ` ${isRunning && classes.active}`}>
        <h3 className={classes.counter}>{counterText}</h3>
        <h2 className={classes.timer}>
          {minutesText}:{secondsText}
        </h2>

        <audio ref={audioPlayer}>
          <source src={soundPath} type="audio/mpeg"></source>
        </audio>
        <button className={classes.button} onClick={buttonHandler}>
          {buttonText}
        </button>
      </div>
      <Head>
        <title>
          GRIND {minutesText}:{secondsText}{" "}
        </title>
      </Head>
    </>
  );
};

export default Clock;
