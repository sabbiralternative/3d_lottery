import { useState } from "react";
import { cn } from "../../utils/cn";

const initialData = [
  {
    id: 1,
    name: "A",
    color: "red",
    circleInput: null,
    squareInput: 0,
  },
  {
    id: 2,
    name: "B",
    color: "orange",
    circleInput: null,
    squareInput: 0,
  },
  {
    id: 3,
    name: "C",
    color: "blue",
    circleInput: null,
    squareInput: 0,
  },
];

const SingleDigit = () => {
  const [singleDigitData, setSingleDigitData] = useState(initialData);
  const handleQuickGuess = () => {
    const updatedData = singleDigitData.map((item) => ({
      ...item,
      circleInput: Math.floor(Math.random() * 10),
      squareInput: 1,
    }));

    setSingleDigitData(updatedData);
  };

  const handleCircleInputChange = (e, item) => {
    const updatedData = singleDigitData.map((data) => ({
      ...data,
      circleInput: item?.id === data?.id ? e.target.vale : data?.circleInput,
      squareInput: item?.id === data?.id ? 1 : data?.squareInput,
    }));

    setSingleDigitData(updatedData);
  };
  return (
    <div className="game-container-single-digit">
      <div className="game-header">
        <div className="title-double">
          <div className>
            <span className="double-size"> Single Digit</span>
            <span className="win-tag">Win 9X/per bet</span>
          </div>
          <div className="ticket-price">
            <span className="strike">21.00</span>
            <span className="discounted">
              20.00<span className="ticket-info">/Per Ticket</span>
            </span>
          </div>
        </div>
        <div className>
          <button
            onClick={handleQuickGuess}
            type="button"
            className="quick-guess-button"
          >
            Quick Guess
          </button>
        </div>
      </div>
      {singleDigitData.map((item) => {
        return (
          <div key={item.id} className="game-row">
            <div className="game-label">
              <div className={`label label-red ${item.color}`}>{item.name}</div>
              <input
                onChange={(e) => handleCircleInputChange(e, item)}
                max={1}
                className={`circle-button-input ${item.color}`}
                placeholder="-"
                type="number"
                value={item.circleInput}
              />
            </div>
            <div
              className="game-info-label"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div className="counter-box">
                <button disabled className="gray-button disabled">
                  -
                </button>
                <input
                  className="count-input"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="off"
                  type="text"
                  value={item.squareInput}
                />
                <button disabled className="gray-button disabled">
                  +
                </button>
              </div>
              <button
                className={cn(
                  "add-button",
                  item.circleInput !== null && "active-blue"
                )}
                disabled={!item.circleInput}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleDigit;
