import React from "react";
import Avatar from "../Avatar";
import Input from "../Input";
import Minipostops from "./Minipostops";

export default function Comments() {
  return (
    <div id="comments" className="post-comment-list">
      <div className="post-comment">
        <a className="user-avatar small no-outline">
          <Avatar size={1} />
        </a>
        <p className="post-comment-text">
          <a className="post-comment-text-author" href="profile-timeline.html">
            Bearded Wonder
          </a>
          It's really inspiring to read about this and how you managed to get
          all up and running! Super awesome! Congratz
          <a href="profile-timeline.html">@MarinaValentine</a>!
        </p>
        <Minipostops />
      </div>
      <div className="post-comment unread reply-2">
        <a className="user-avatar small no-outline">
          <Avatar size={1} />
        </a>
        <p className="post-comment-text">
          <a className="post-comment-text-author" href="profile-timeline.html">
            The Green Goo
          </a>
          Yeah!! Totally agree!
        </p>
        <Minipostops />
      </div>
      <div className="post-comment">
        <a
          className="user-avatar small no-outline"
          href="profile-timeline.html"
        >
          <Avatar size={1} />{" "}
        </a>
        <p className="post-comment-text">
          <a className="post-comment-text-author" href="profile-timeline.html">
            Nick Grissom
          </a>
          I also started streaming with a simmilar game! I'm very excited to see
          what's next on your streams and for your next projects
        </p>
        <Minipostops />
      </div>
      <div className="post-comment">
        <a
          className="user-avatar small no-outline"
          href="profile-timeline.html"
        >
          <Avatar size={1} />
        </a>
        <p className="post-comment-text">
          <a className="post-comment-text-author" href="profile-timeline.html">
            Neko Bebop
          </a>
          It was great to start this with you and keep streming together! I'm
          hoping that we can do this for many years to come...and for everyone
          else, keep posted because we have lots of surprises, including a sneak
          peek of upcoming games and new DLCs
        </p>
        <Minipostops />
      </div>
      <p className="post-comment-heading">
        Load More Comments <span className="highlighted">1+</span>
      </p>
      <div className="post-comment-form">
        <div className="user-avatar small no-outline">
          <Avatar size={1} />
        </div>
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <Input label="Your Reply" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
