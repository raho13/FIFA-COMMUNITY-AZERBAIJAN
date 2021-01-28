import React from 'react'
import Banner from "../component/Banner";
import { Link } from 'react-router-dom'
import img from '../img/cover/01.jpg'
import bannerimg from '../img/banner/streams-icon.png'
import { ReactComponent as Azerbaijan } from "../icons/azerbaijan.svg";
export default function Streams() {
    return (
        <>
            <Banner img={bannerimg} header='Streams (98)' des='Check out all the members streams!' />
            <div className="section-header">
                <div className="section-header-info">
                    <p className="section-pretitle">Chosen by the Community</p>
                    <h2 className="section-title">Featured Streamers</h2>
                </div>
            </div>
            <div id="stream-slider" className="section-slider">
                <div className="sections-slider-item card">
                    <img src={img} alt="cover-01" className='card-img' />
                    <div className='card-info'>
                        <div className='cardheader'>
                            <Link className="menu-item-link" to='/Lessons'>
                                <div className='cardname'>Rahib</div>
                            </Link>
                            <div className='cardpoint'>7.34</div>
                        </div>
                        <div className='cardbody'>
                            <div className='cardlang'>
                                <p id='cardlngtxt'>Dil</p>
                                <Azerbaijan className="cardflag" />
                                <Azerbaijan className="cardflag" />
                                <Azerbaijan className="cardflag" />
                            </div>
                            <div className='cardlang'>
                                <p id='cardcaptxt'>ALTYAZI</p>
                                <Azerbaijan className="cardflag" />
                                <Azerbaijan className="cardflag" />
                                <Azerbaijan className="cardflag" />
                            </div>
                        </div>
                        <div className='cardstart'>
                            <Link className="menu-item-link" to='/Lessons'>
                                <p class="button small secondary bnm">Kursa başla</p>
                            </Link>
                            <p class="button small secondary bnm1">Önizləmə</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
