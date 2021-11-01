import React from "react";
import useFetchActivity from "../utils/useFetchActivity";
import ActivityDetail from "./ActivityDetail";

export default function ActivityFeed() {
  const [activity, setActivity, loading, error] = useFetchActivity();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch API</p>;
  return (
    <div className="feed-container">
      {activity.map((item, index) => (
        <ActivityDetail key={index} item={item} />
      ))}
      {console.log("here")}
    </div>
  );
}
