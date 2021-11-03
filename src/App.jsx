import React, { useState } from "react";
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
      <div className="container-view">
        <ActivityFeed />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
