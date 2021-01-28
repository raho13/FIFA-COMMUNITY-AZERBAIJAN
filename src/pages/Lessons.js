import React, { useEffect, useRef } from 'react'
import Banner from "../component/Banner";
import bannerimg from '../img/banner/streams-icon.png'
import { ReactComponent as Man } from "../icons/circleMan.svg";
import unlocked from '../img/badge/unlocked-badge.png'
import completed from '../img/badge/completedq-s.png'
export default function Lessons() {
    useEffect(() => {
        var can = document.getElementById('profile-completion-chart')
        const ctx = can.getContext('2d')
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.strokeStyle = 'red'
        ctx.arc(100, 100, 50, 0 * Math.PI, 2 * Math.PI)
        ctx.stroke()
    })
    return (
        <>
            <Banner img={bannerimg} header='Streams (98)' des='Check out all the members streams!' />
            <div className="section-header">
                <div className="section-header-info">
                    <p className="section-pretitle">Chosen by the Community</p>
                    <h2 className="section-title">Lessons</h2>
                </div>
            </div>
            <div className="grid grid-3-6-3 mobile-prefer-content">
                <div className="grid-column sticky">
                    <div className="sidebar-box no-padding">
                        <div className="sidebar-menu">
                            <div className="sidebar-menu-item">
                                <div className="sidebar-menu-header accordion-trigger-linked">
                                    <Man className="sidebar-menu-header-icon icon-profile" />
                                    <div className="sidebar-menu-header-control-icon">
                                        <svg className="sidebar-menu-header-control-icon-open icon-minus-small">
                                        </svg>
                                        <svg className="sidebar-menu-header-control-icon-closed icon-plus-small">
                                        </svg>
                                    </div>
                                    <p className="sidebar-menu-header-title">Mündəricat</p>
                                    <p className="sidebar-menu-header-text">Change your avatar &amp; cover, accept friends, read messages
                                    and more!</p>
                                </div>
                                <div className="sidebar-menu-body accordion-content-linked">
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                    <a className="sidebar-menu-link lessonitem" >Lesson <span>01:27</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-box-footer">
                            <p className="button primary">Save Changes!</p>
                            <p className="button white small-space">Discard All</p>
                        </div>
                    </div>
                </div>
                <div className="grid-column sticky">
                    <div className="iframe-wrap"> <iframe src="https://www.youtube.com/embed/rk-wIgg9fNk" allowFullScreen />
                    </div>
                </div>
                <div className="grid-column sticky">
                    <div className="widget-box">
                        <div className="progress-arc-summary sdf">
                            <div className="progress-arc-wrap">
                                <div className="progress-arc" >
                                    <canvas id="profile-completion-chart" />
                                </div>
                                <div className="progress-arc-info">
                                    <p className="progress-arc-title">59%</p>
                                </div>
                            </div>
                            <div className="progress-arc-summary-info">
                                <p className="progress-arc-summary-title">Profile Completion</p>
                                <p className="progress-arc-summary-subtitle">Marina Valentine</p>
                                <p className="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
                            </div>
                        </div>
                        <div className="achievement-status-list">
                            <div className="achievement-status"> <p className="achievement-status-progress">11/30</p>
                                <div className="achievement-status-info"> <p className="achievement-status-title">Quests</p>
                                    <p className="achievement-status-text">Completed</p>
                                </div>
                                <img className="achievement-status-image" src={completed} alt="bdage-completedq-s" />
                            </div>
                            <div className="achievement-status"> <p className="achievement-status-progress">22/46</p>
                                <div className="achievement-status-info"> <p className="achievement-status-title">Badges</p>
                                    <p className="achievement-status-text">Unlocked</p></div>
                                <img className="achievement-status-image" src={unlocked} alt="bdage-unlocked-badge" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
