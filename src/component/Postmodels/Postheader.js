import React from "react";
import Avatar from "../Avatar";
export default function Postheader() {
  return (
    <div className="user-status">
      <a className="user-status-avatar" href="salm">
        <div className="user-avatar small no-outline">
          <Avatar size={1} />
        </div>
      </a>
      <p className="user-status-title medium">
        <a className="bold" href="profile-timeline.html">
          Nick Grissom
        </a>
        shared a <span className="bold">post</span>
      </p>
      <p className="user-status-text small">40 minutes ago</p>
    </div>
  );
}
