import React, { useContext } from "react";
import { menuContext } from "../context";
import { Scrollbars } from "react-custom-scrollbars";
export default function Chatwidget() {
  const { msgWidget, setmsgWidget } = useContext(menuContext);
  const handleWidget = () => {
    if (msgWidget === false) {
      return "chat-widget sidebar right closed";
    } else {
      return "chat-widget sidebar right";
    }
  };
  return (
    <aside id="chat-widget-messages" className={handleWidget()}>
      <div className="chat-widget-messages" data-simplebar>
        <Scrollbars>
          <div className="chat-widget-message">
            <div className="user-status">
              <div className="user-status-avatar">
                <div className="user-avatar small no-outline online">
                  <div className="user-avatar-content">
                    <div
                      className="hexagon-image-30-32"
                      data-src="img/avatar/20.jpg"
                    />
                  </div>
                  <div className="user-avatar-progress">
                    <div className="hexagon-progress-40-44" />
                  </div>
                  <div className="user-avatar-progress-border">
                    <div className="hexagon-border-40-44" />
                  </div>
                  <div className="user-avatar-badge">
                    <div className="user-avatar-badge-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-badge-content">
                      <div className="hexagon-dark-16-18" />
                    </div>
                    <p className="user-avatar-badge-text">9</p>
                  </div>
                </div>
              </div>
              <p className="user-status-title">
                <span className="bold">Matt Parker</span>
              </p>
              <p className="user-status-timestamp floaty">2hrs</p>
            </div>
          </div>
          <div className="chat-widget-message">
            <div className="user-status">
              <div className="user-status-avatar">
                <div className="user-avatar small no-outline away">
                  <div className="user-avatar-content">
                    <div
                      className="hexagon-image-30-32"
                      data-src="img/avatar/05.jpg"
                    />
                  </div>
                  <div className="user-avatar-progress">
                    <div className="hexagon-progress-40-44" />
                  </div>
                  <div className="user-avatar-progress-border">
                    <div className="hexagon-border-40-44" />
                  </div>
                  <div className="user-avatar-badge">
                    <div className="user-avatar-badge-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-badge-content">
                      <div className="hexagon-dark-16-18" />
                    </div>
                    <p className="user-avatar-badge-text">12</p>
                  </div>
                </div>
              </div>
              <p className="user-status-title">
                <span className="bold">Neko Bebop</span>
              </p>
              <p className="user-status-timestamp floaty">54mins</p>
            </div>
          </div>
          <div className="chat-widget-message">
            <div className="user-status">
              <div className="user-status-avatar">
                <div className="user-avatar small no-outline offline">
                  <div className="user-avatar-content">
                    <div
                      className="hexagon-image-30-32"
                      data-src="img/avatar/04.jpg"
                    />
                  </div>
                  <div className="user-avatar-progress">
                    <div className="hexagon-progress-40-44" />
                  </div>
                  <div className="user-avatar-progress-border">
                    <div className="hexagon-border-40-44" />
                  </div>
                  <div className="user-avatar-badge">
                    <div className="user-avatar-badge-border">
                      <div className="hexagon-22-24" />
                    </div>
                    <div className="user-avatar-badge-content">
                      <div className="hexagon-dark-16-18" />
                    </div>
                    <p className="user-avatar-badge-text">6</p>
                  </div>
                </div>
              </div>
              <p className="user-status-title">
                <span className="bold">Bearded Wonder</span>
              </p>
              <p className="user-status-timestamp floaty">2hrs</p>
            </div>
          </div>
        </Scrollbars>
      </div>
      <form className="chat-widget-form">
        <div className="interactive-input small">
          <button className="button small secondary" style={{ width: "250px" }}>
            Share
          </button>
        </div>
      </form>
      <div
        className="chat-widget-button"
        onClick={() => {
          setmsgWidget(!msgWidget);
        }}
      >
        <div className="chat-widget-button-icon">
          <div className="burger-icon">
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
          </div>
        </div>
        <p className="chat-widget-button-text">Messages / Chat</p>
      </div>
    </aside>
  );
}
