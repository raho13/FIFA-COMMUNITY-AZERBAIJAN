import React from 'react'
import Postoption from "./Postoption";
import Postoptionsdot from "./Postoptionsdot";

export default function Gifpost() {
    return (
        <div className="widget-box no-padding">
            <Postoptionsdot/>
            <div className="widget-box-status">
                <div className="widget-box-status-content">
                    <div className="user-status"> <a className="user-status-avatar" href="profile-timeline.html">
                        <div className="user-avatar small no-outline">
                            <div className="user-avatar-content">
                                <div className="hexagon-image-30-32" data-src="img/avatar/03.jpg" />
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
                                <p className="user-avatar-badge-text">16</p>
                            </div>
                        </div>
                    </a>
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Nick Grissom</a></p>
                        <p className="user-status-text small">1 hour ago</p>
                    </div>
                    <p className="widget-box-status-text">When you finally pass the quest that you've been trying for so long...
      </p>
                </div>
                <div className="iframe-wrap"> <iframe src="https://giphy.com/embed/1LnQIODGufGec" allowFullScreen />
                </div>
                <div className="widget-box-status-content">
                    <div className="content-actions">
                        <div className="content-action">
                            <div className="meta-line">
                                <div className="meta-line-list reaction-item-list">
                                </div>
                                <p className="meta-line-text">16</p>
                            </div>
                            <div className="meta-line">
                                <div className="meta-line-list user-avatar-list">
                                    <div className="user-avatar micro no-stats">
                                        <div className="user-avatar-border">
                                            <div className="hexagon-22-24" />
                                        </div>
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-18-20" data-src="img/avatar/07.jpg" />
                                        </div>
                                    </div>
                                    <div className="user-avatar micro no-stats">
                                        <div className="user-avatar-border">
                                            <div className="hexagon-22-24" />
                                        </div>
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-18-20" data-src="img/avatar/13.jpg" />
                                        </div>
                                    </div>
                                    <div className="user-avatar micro no-stats">
                                        <div className="user-avatar-border">
                                            <div className="hexagon-22-24" />
                                        </div>
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-18-20" data-src="img/avatar/22.jpg" />
                                        </div>
                                    </div>
                                    <div className="user-avatar micro no-stats">
                                        <div className="user-avatar-border">
                                            <div className="hexagon-22-24" />
                                        </div>
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-18-20" data-src="img/avatar/10.jpg" />
                                        </div>
                                    </div>
                                    <div className="user-avatar micro no-stats">
                                        <div className="user-avatar-border">
                                            <div className="hexagon-22-24" />
                                        </div>
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-18-20" data-src="img/avatar/08.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <p className="meta-line-text">19 Participants</p>
                            </div>
                        </div>
                        <div className="content-action">
                            <div className="meta-line">
                                <p className="meta-line-link">2 Comments</p>
                            </div>
                            <div className="meta-line">
                                <p className="meta-line-text">0 Shares</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Postoption />
        </div>

    )
}
