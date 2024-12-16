import React from "react";
import "./DestinationActivities.css";

const DestinationActivities = ({ activities }) => {
  return (
    <div className="destination-activities">
      <h3 className="activities-title">Top Activities</h3>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.image} alt={activity.title} className="activity-image" />
            <h4 className="activity-title">{activity.title}</h4>
            <p className="activity-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationActivities;
