import { useReducer } from "react";

const initialState = {
  confData: {
    focus: 1,
    shortBreak: 1,
    longBreak: 1,
  },
  counter: {
    focuses: 1,
    breaks: 1,
    current: "focus",
    next: "short-break",
  },
  minutes: 1,
  seconds: 0,
  isRunning: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONF_DATA":
      return { ...state, confData: action.payload };
    case "SET_COUNTER":
      const { counter } = state;
      const { focuses, breaks, current } = counter;
      const newCounter = { focuses, breaks, current, next: "short-break" };

      console.log(focuses, breaks);

      if (focuses < breaks) {
        console.log("1");
        newCounter.focuses += 1;
        newCounter.current = "focus";
        if (newCounter.focuses % 4 === 0) newCounter.next = "long-break";
      }
      if (focuses > breaks || focuses === breaks) {
        console.log("2");

        newCounter.breaks += 1;
        newCounter.current = "short-break";
        newCounter.next = "focus";

        if (breaks % 4 === 0) newCounter.current = "long-break";
      }
      console.log("---------");
      console.log(newCounter);
      console.log("\n");
      return { ...state, counter: newCounter };

    case "SET_TIMER":
      const {
        confData,
        minutes,
        seconds,

        counter: counter2,
      } = state;
      if (seconds > 0) return { ...state, seconds: seconds - 1 };
      if (minutes > 0) {
        return { ...state, minutes: minutes - 1, seconds: 5 };
      }

      // Reseting/Changing timer values
      const { current: currentTimer } = counter2;
      let newMinutes = confData.focus;
      if (currentTimer === "short-break") newMinutes = confData.shortBreak;
      if (currentTimer === "long-break") newMinutes = confData.longBreak;

      return { ...state, isRunning: false, seconds: 0, minutes: newMinutes };

    case "SET_IS_RUNNING":
      console.log("clicked");
      return { ...state, isRunning: !state.isRunning };
    default:
      return state;
  }
};

const useClock = () => {
  return useReducer(reducer, initialState);
};

export default useClock;
