import { useState } from "react";
import { cn } from "../../utils/cn";

const initialData = [
  {
    id: 1,
    triple: [
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
      {
        name: "C",
        color: "blue",
        circleInput: null,
      },
    ],
    squareInput: 0,
  },
];

const TripleDigit = () => {
  const [singleDigitData, setSingleDigitData] = useState(initialData);
  const handleQuickGuess = () => {
    const updatedData = singleDigitData.map((item) => ({
      ...item,
      triple: item.triple.map((d) => ({
        ...d,
        circleInput: Math.floor(Math.random() * 10),
      })),
      squareInput: 1,
    }));

    setSingleDigitData(updatedData);
  };

  const handleCircleInputChange = (e, triple) => {
    console.log(e.target.value);
    const updatedData = singleDigitData.map((data) => ({
      ...data,
      triple: data.triple.map((t) => ({
        ...t,
        circleInput: t.name === triple.name ? e.target.value : t?.circleInput,
      })),
      squareInput: e.target.value !== "" ? 1 : 0,
    }));

    setSingleDigitData(updatedData);
  };
  return (
    <div className="triple-digit-container">
      <div className="game-header-triple">
        <div className="title-double">
          <span className="double-size"> Triple Digit</span>
          <span className="win-tag">Win 900X/per bet</span>
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
          <div key={item.id} className="game-row-triple">
            <div className="label-circle-row">
              {item.triple.map((t) => (
                <div key={t.name} className="label-circle-group">
                  <div className={cn("label", `label-${t.color}`)}>A</div>
                  <input
                    onChange={(e) => handleCircleInputChange(e, t)}
                    maxLength={1}
                    className={cn(`circle-button-input`, `circle-${t.color}`)}
                    placeholder="-"
                    type="number"
                    value={t.circleInput}
                  />
                </div>
              ))}
            </div>
            <div className="controls">
              <div className="label-circle-group">
                <div
                  className="control-row-triple"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <button className="control-btn gray-button disabled" disabled>
                    -
                  </button>
                  <input
                    className="count-input"
                    min={0}
                    type="number"
                    value={item.squareInput}
                  />
                  <button className="control-btn gray-button disabled" disabled>
                    +
                  </button>
                </div>
                <div className="action-buttons">
                  <button
                    className={cn(
                      "add-button",
                      item.triple.every((t) => t.circleInput !== null) &&
                        "active-blue"
                    )}
                    disabled={item.triple.some((t) => t.circleInput === null)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TripleDigit;
