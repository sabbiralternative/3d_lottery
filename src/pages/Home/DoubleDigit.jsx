import { useState } from "react";
import { cn } from "../../utils/cn";

const initialData = [
  {
    id: 1,
    double: [
      {
        name: "A",
        color: "red",
        circleInput: null,
      },
      {
        name: "B",
        color: "orange",
        circleInput: null,
      },
    ],
    squareInput: 0,
  },
  {
    id: 2,
    double: [
      {
        name: "A",
        color: "red",
        circleInput: null,
      },
      {
        name: "C",
        color: "blue",
        circleInput: null,
      },
    ],
    squareInput: 0,
  },
  {
    id: 3,
    double: [
      {
        name: "B",
        color: "orange",
        circleInput: null,
      },
      {
        name: "C",
        color: "blue",
        circleInput: null,
      },
    ],
    squareInput: 0,
  },
];

const DoubleDigit = () => {
  const [singleDigitData, setSingleDigitData] = useState(initialData);
  const handleQuickGuess = () => {
    const updatedData = singleDigitData.map((item) => ({
      ...item,
      double: item.double.map((d) => ({
        ...d,
        circleInput: Math.floor(Math.random() * 10),
      })),
      squareInput: 1,
    }));

    setSingleDigitData(updatedData);
  };

  const handleCircleInputChange = (e, item, double) => {
    const updatedData = singleDigitData.map((data) => ({
      ...data,
      double: data.double.map((d) => ({
        ...d,
        circleInput:
          item?.id === data?.id && d.name === double.name
            ? e.target.vale
            : d?.circleInput,
      })),
      squareInput: data.double.some((d) => d.circleInput !== null)
        ? 1
        : data.squareInput,
    }));

    setSingleDigitData(updatedData);
  };
  return (
    <div className="double-digit-container">
      <div className="game-header-double">
        <div className="title-double">
          <span className="double-size"> Double Digit</span>
          <span className="win-tag">Win 90X/per bet</span>
          <div className="ticket-info">
            <span className="original-price">21.00</span>
            <span className="discounted-price">20.00</span>/Per Ticket
          </div>
        </div>
        <div className="game-header">
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
          <div key={item.id} className="game-row-double">
            <div className="label-container">
              <div className="label-double-text">
                {item.double.map((d, idx) => (
                  <div key={idx} className={cn("label", `label-${d.color}`)}>
                    {d.name}
                  </div>
                ))}
              </div>
              <div className="label-container-circle">
                {item.double.map((d, index) => (
                  <input
                    onChange={(e) => handleCircleInputChange(e, item, d)}
                    key={index}
                    maxLength={1}
                    className={cn("circle-button-input", ` circle-${d.color}`)}
                    placeholder="-"
                    type="number"
                    value={d.circleInput}
                  />
                ))}
              </div>
            </div>
            <div className="controls">
              <div
                className="control-labels"
                style={{ display: "flex", gap: "10px" }}
              >
                <button className="control-btn gray-button disabled" disabled>
                  -
                </button>
                <input
                  className="count-input"
                  placeholder={0}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="off"
                  type="text"
                  value={item.squareInput}
                />
                <button className="control-btn gray-button disabled" disabled>
                  +
                </button>
              </div>
              <div className="amount-input-container" style={{ width: "100%" }}>
                <button className="add-button" disabled>
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoubleDigit;
