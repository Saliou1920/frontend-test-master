import React from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.js";
import Footer from "./components/Footer.js";

import Header from "./Header.jsx";
import useFetchActivity from "./utils/useFetchActivity.js";

const App = () => {
  const [activity, setActivity, loading, error] = useFetchActivity();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch API</p>;
  return (
    <div className="container">
      <Header />
      <div className="box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "0";
            }}
          >
            All
          </button>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "65px";
            }}
          >
            Missed
          </button>
        </div>
      </div>
      <div className="container-view">
        <ActivityFeed />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
