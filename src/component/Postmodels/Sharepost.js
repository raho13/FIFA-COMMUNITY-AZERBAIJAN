import React from "react";
import Postoption from "./Postoption";
import Postoptionsdot from "./Postoptionsdot";
import img1 from "../../img/cover/51.jpg"
export default function Sharepost() {
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
                        <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Nick Grissom</a> shared
                          a <span className="bold">post</span></p>
                        <p className="user-status-text small">40 minutes ago</p>
                    </div>
                    <p className="widget-box-status-text">Keep an eye out for <a href="#">@DestroyDex</a> surprise streams for
                        awesome givaways!</p>
                    <div className="widget-box no-padding">
                        <div className="widget-box-status">
                            <div className="widget-box-status-content">
                                <div className="user-status"> <a className="user-status-avatar" href="profile-timeline.html">
                                    <div className="user-avatar small no-outline">
                                        <div className="user-avatar-content">
                                            <div className="hexagon-image-30-32" data-src="img/avatar/02.jpg" />
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
                                            <p className="user-avatar-badge-text">19</p>
                                        </div>
                                    </div>
                                </a>
                                    <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Destroy Dex</a>
                                    </p>
                                    <p className="user-status-text small">6 hours ago</p>
                                </div>
                                <p className="widget-box-status-text">Attention everyone! From now on and through all the holydays
                                season I'll be giving free season passes for a bunch of different games. Be on the lookout for
                              these special streams to participate and win awesome prizes!</p><a className="video-status" href="https://www.twitch.tv/" target="_blank"> <img className="video-status-image" src={img1} alt="cover-51" />
                                    <div className="video-status-info">
                                        <p className="video-status-meta">twitch.tv</p>
                                        <p className="video-status-title"><span className="bold">Destroy Dex</span> on <span className="highlighted">Twitch</span></p>
                                        <p className="video-status-text">Tune in every Sunday for awesome givaways!</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
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
