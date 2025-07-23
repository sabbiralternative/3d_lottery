import { useEffect, useState } from "react";
import BetList from "./BetList";
import BottomCartWrapper from "./BottomCartWrapper";
import DoubleDigit from "./DoubleDigit";
import Navbar from "./Navbar";
import Quick3DContainer from "./Quick3DContainer";
import SingleDigit from "./SingleDigit";
import TripleDigit from "./TripleDigit";
import MinuteTab from "./MinuteTab";

const Home = () => {
  const [minuteTab, setMinuteTab] = useState(1.5);
  const [counter, setCounter] = useState(1.5 * 60);
  const [translate, setTranslate] = useState(1);
  const [formatTime, setFormatTime] = useState({ minute: 0, second: 0 });

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (counter === 0) {
      setCounter(minuteTab * 60);
      setTranslate(1);
    }
  }, [minuteTab, counter]);

  useEffect(() => {
    if (translate === 1) {
      setTranslate(100);
    }
  }, [translate]);

  useEffect(() => {
    if (counter > 0) {
      const mins = Math.floor(counter / 60);
      const secs = counter % 60;

      const formattedMins = String(mins).padStart(2, "0");
      const formattedSecs = String(secs).padStart(2, "0");
      setFormatTime({ minute: formattedMins, second: formattedSecs });
    }
  }, [counter]);

  return (
    <div className="game-container">
      <Navbar />
      <div className="game-info">
        <div className="game-info-body">
          <div className="lobby-tab-container">
            <MinuteTab
              setCounter={setCounter}
              minuteTab={minuteTab}
              setMinuteTab={setMinuteTab}
            />
          </div>
          <div
            className="progress-bar"
            aria-valuenow="100"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext="100%"
          >
            <div className="inside-p-bar">
              <div
                className="bar-color"
                style={{
                  transform: `translateX(-${translate}%)`,
                  transitionDuration: `${minuteTab * 60 * 1000}ms`,
                }}
              />
            </div>
          </div>
          <Quick3DContainer formatTime={formatTime} />
          <div className="game-info-content">
            <SingleDigit />
            <DoubleDigit />
            <TripleDigit />
          </div>
        </div>
        <BetList />
      </div>
      <BottomCartWrapper />
    </div>
  );
};

export default Home;
