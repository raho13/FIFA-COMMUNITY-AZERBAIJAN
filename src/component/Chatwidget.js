import { Scrollbars } from "react-custom-scrollbars";
import Avatar from "../component/Avatar";
import { useRecoilState } from "recoil";
import { storyBar } from "../Atoms/global";
export default function Chatwidget() {
  const [msgWidget, setmsgWidget] = useRecoilState(storyBar);
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
                  <Avatar size={1} />
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
                  <Avatar size={1} />
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
                  <Avatar size={1} />
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
      <form className="chat-widget-form wgtfrm">
        <div className="interactive-input small">
          <button className="button small secondary wgtbtn">
            Share your Story
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
