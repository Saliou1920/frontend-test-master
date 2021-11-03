import React, { useState } from "react";
import useFetchActivity from "../utils/useFetchActivity";
import ActivityDetail from "./ActivityDetail";
import "../css/activityFeed.css";

export default function ActivityFeed({ boxSelector, setBoxSelector }) {
  const [activity, setActivity, loading, error] = useFetchActivity();

  function filterCall(std) {
    if (boxSelector === "all") {
      return std;
    } else if (std.call_type.toLowerCase().includes("missed")) {
      return std;
    } else if (std.call_type.toLowerCase().includes("voicemail")) {
      return std;
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch API</p>;
  return (
    <div>
      <div className="box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "0";
              console.log("all");
              setBoxSelector("all");
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
              console.log("missed");
              setBoxSelector("missed");
            }}
          >
            Missed
          </button>
        </div>
      </div>

      <div className="feed-container">
        {activity.filter(filterCall).map((item, index) => (
          <ActivityDetail key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
