const BetList = () => {
  return (
    <div className="bet-list">
      <div className="bet-list-tab">
        <div className="bet-list-tab-body">
          <button className="list-tab list-tab-active">
            <span className="list-tab-span" />
            <div className="list-text list-text-active">Result History</div>
          </button>
          <button className="list-tab">
            <div className="list-text">My Order</div>
          </button>
        </div>
      </div>
      <div className="bet-table-container">
        <div className="bet-table-container-body">
          <div className="bet-table-result">
            <div className="table-header">
              <div className="table-header-body">
                <div className="th-head-one">Issue</div>
                <div className="th-head-two">Time</div>
                <div className="th-head-three">Number</div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753251261053-101</div>
                <div className="created-name">July 23 at 12:15 PM</div>
                <div className="row-two red-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">3</span>
                    <span className="value-circle orange-circle">2</span>
                    <span className="value-circle blue-circle">9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753251168939-101</div>
                <div className="created-name">July 23 at 12:14 PM</div>
                <div className="row-two red-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">5</span>
                    <span className="value-circle orange-circle">4</span>
                    <span className="value-circle blue-circle">7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753251076823-101</div>
                <div className="created-name">July 23 at 12:12 PM</div>
                <div className="row-two green-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">4</span>
                    <span className="value-circle orange-circle">3</span>
                    <span className="value-circle blue-circle">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250984700-101</div>
                <div className="created-name">July 23 at 12:11 PM</div>
                <div className="row-two red-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">5</span>
                    <span className="value-circle orange-circle">4</span>
                    <span className="value-circle blue-circle">7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250892582-101</div>
                <div className="created-name">July 23 at 12:09 PM</div>
                <div className="row-two green-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">5</span>
                    <span className="value-circle orange-circle">6</span>
                    <span className="value-circle blue-circle">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250800456-101</div>
                <div className="created-name">July 23 at 12:08 PM</div>
                <div className="row-two green-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">2</span>
                    <span className="value-circle orange-circle">5</span>
                    <span className="value-circle blue-circle">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250708341-101</div>
                <div className="created-name">July 23 at 12:06 PM</div>
                <div className="row-two green-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">7</span>
                    <span className="value-circle orange-circle">6</span>
                    <span className="value-circle blue-circle">6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250616225-101</div>
                <div className="created-name">July 23 at 12:05 PM</div>
                <div className="row-two red-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">7</span>
                    <span className="value-circle orange-circle">9</span>
                    <span className="value-circle blue-circle">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250524115-101</div>
                <div className="created-name">July 23 at 12:03 PM</div>
                <div className="row-two red-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">6</span>
                    <span className="value-circle orange-circle">1</span>
                    <span className="value-circle blue-circle">9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-container">
              <div className="table-row-body">
                <div className="row-one">1753250432003-101</div>
                <div className="created-name">July 23 at 12:02 PM</div>
                <div className="row-two green-text">
                  <div className="abc-circles-container">
                    <span className="value-circle red-circle">1</span>
                    <span className="value-circle orange-circle">4</span>
                    <span className="value-circle blue-circle">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="show-more-data">
            <button className="show-more">Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetList;
