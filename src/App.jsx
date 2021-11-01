import React from "react";
import ReactDOM from "react-dom";

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
        Some activities should be here
        {console.log(error)};
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
