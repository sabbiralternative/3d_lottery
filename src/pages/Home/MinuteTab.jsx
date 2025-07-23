import { cn } from "../../utils/cn";

const MinuteTab = ({ minuteTab, setMinuteTab, setCounter }) => {
  return (
    <div className="lobby-tab-content">
      <div
        onClick={() => {
          setMinuteTab(1.5);
          setCounter(1.5 * 60);
        }}
        className={cn("lobby-tab", minuteTab === 1.5 && "lobby-tab-active")}
      >
        <span className={cn("number", minuteTab === 1.5 && "number-active")}>
          1.5
        </span>
        <p className={cn("minutes", minuteTab === 1.5 && "m-active")}>
          Minutes
        </p>
      </div>
      <div
        onClick={() => {
          setMinuteTab(3);
          setCounter(3 * 60);
        }}
        className={cn("lobby-tab", minuteTab === 3 && "lobby-tab-active")}
      >
        <span className={cn("number", minuteTab === 3 && "number-active")}>
          3
        </span>
        <p className={cn("minutes", minuteTab === 3 && "m-active")}>Minutes</p>
      </div>
      <div
        onClick={() => {
          setMinuteTab(5);
          setCounter(5 * 60);
        }}
        className={cn("lobby-tab", minuteTab === 5 && "lobby-tab-active")}
      >
        <span className={cn("number", minuteTab === 5 && "number-active")}>
          5
        </span>
        <p className={cn("minutes", minuteTab === 5 && "m-active")}>Minutes</p>
      </div>
    </div>
  );
};

export default MinuteTab;
