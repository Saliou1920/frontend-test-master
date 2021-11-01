import React from "react";
import useFetchActivity from "../utils/useFetchActivity";

export default function ActivityFeed() {
  const [activity, setActivity, loading, error] = useFetchActivity();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch API</p>;
  return (
    <div>
      <h2>Activity Feed</h2>
      <ul>
        {activity.map((item) => (
          <li key={item.id}>{item.from}</li>
        ))}
      </ul>
    </div>
  );
}
