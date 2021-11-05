import React, { useState } from "react";
import "../css/activityDetail.css";
import { BsFillNodePlusFill, BsFillNodeMinusFill } from "react-icons/bs";
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";

export default function ActivityDetail({ item }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="detail-container">
      <div className="detail-header">
        <p>{item.created_at.slice(0, 10)}</p>
      </div>
      <div className="detail-body">
        <div className="call-content">
          <div className="call-logo">
            {item.direction === "inbound" && <FiPhoneIncoming size="1.4em" />}
            {item.direction === "outbound" && (
              <FiPhoneOutgoing
                size="1.4em"
                color={item.call_type === "missed" ? "red" : ""}
              />
            )}
          </div>
          <div className="call-detail">
            <h1 className={item.call_type === "missed" ? "missed" : ""}>
              {item.from}
            </h1>
            <h2>{item.to}</h2>
          </div>
        </div>
        <div className="call-time">
          <p>{item.created_at.slice(11, 16)}</p>
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? (
              <BsFillNodeMinusFill size="1.5em" />
            ) : (
              <BsFillNodePlusFill size="1.5em" />
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="detail-body-content">
          <p>{item.call_type}</p>
          <p>{`Duration : ${item.duration} minutes`}</p>
          <p>{`Via : ${item.via}`}</p>
          {!item.is_archived && (
            <button
              onClick={() => {
                item.is_archived = true;
              }}
            >
              archive
            </button>
          )}
        </div>
      )}
    </div>
  );
}
