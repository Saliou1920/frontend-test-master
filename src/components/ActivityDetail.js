import React from "react";

export default function ActivityDetail({ item }) {
  return (
    <div className="detail-container">
      <div className="call-logo">
        {item.direction === "inbound" && (
          <img src="../../public/incoming-call.svg" width="25px" />
        )}
        {item.direction === "outbound" && (
          <img src="../../public/outgoing-call.svg" width="25px" />
        )}
      </div>
      <div className="call-detail">
        <h1>{item.from}</h1>
        <h2>{item.to}</h2>
      </div>
      <div className="call-time">
        <p>{item.created_at}</p>
      </div>
    </div>
  );
}
