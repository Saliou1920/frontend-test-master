import React, { useState } from "react";
import "../css/activityDetail.css";
export default function ActivityDetail({ item }) {
  const [isActive, setIsActive] = useState(false);

  //   var Date = () => {
  //     const [memo, setMemo] = useState("");
  //     var options = {
  //       weekday: "long",
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     };
  //     if (item.created_at.slice(0, 10) !== memo) {
  //       var date = new Date(item.created_at.slice(0, 10));
  //       setMemo(item.created_at.slice(0, 10));
  //       return date.toLocaleDateString("en-US", options);
  //     }
  //   };

  return (
    <div className="detail-container">
      <div className="detail-header">
        <p>{item.created_at.slice(0, 10)}</p>
      </div>
      <div className="detail-body">
        <div className="call-content">
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
        </div>
        <div className="call-time">
          <p>{item.created_at.slice(11, 16)}</p>
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? (
              <img src="../../public/minus-circle.svg" width="15px" />
            ) : (
              <img src="../../public/plus-circle.svg" width="15px" />
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="detail-body-content">
          <p>{`Duration : ${item.duration} minutes`}</p>
          <p>{`Via : ${item.via}`}</p>
        </div>
      )}
    </div>
  );
}
