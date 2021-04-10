import React from "react";
import Banner from "../component/Banner";
import bannerimg from "../img/banner/streams-icon.png";
import Avatar from "../component/Avatar";
import { ReactComponent as Flag } from "../icons/azerbaijan.svg";
export default function FifaTournaments() {
  //const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const func = () => {
  //     a.map((i) => {
  //       console.log(i.index);
  //     });
  //   };

  return (
    <>
      <Banner
        img={bannerimg}
        header="FifaTournaments"
        des="Check out all the members streams!"
      />
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">FİFA COMMUNITY AZERBAIJAN</p>
          <h2 className="section-title">ŞƏXSİ OTAQ</h2>
        </div>
      </div>

      <div className="grid grid-3-9 medium-space">
        <div className="widget-box">
          <div className="widget-box-content">
            <div className="form">
              <div className="form-row split spMobile">
                <div className="form-item">
                  <div className="form-input small fifaMatch">
                    <div className="fristPlayer">
                      <div className="playerAvatar">
                        <Avatar size={1} />
                      </div>
                      <div className="playerinfo">
                        <p className="frplayerName">Cavid Qurbanov</p>
                        <p className="playerFlag">
                          <Flag className="Reyflacicn" /> Azerbaijan
                        </p>
                      </div>
                    </div>
                    <div className="fifaResult">6-0</div>
                    <div className="secondPlayer">
                      <div className="playerAvatar">
                        <Avatar size={1} />
                      </div>
                      <div className="playerinfo1">
                        <p className="frplayerName">Rahib Rzayev</p>
                        <p className="playerFlag">
                          <Flag className="Reyflacicn" /> Azerbaijan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-input small fifaMatch">
                    <div className="fristPlayer">
                      <div className="playerAvatar">
                        <Avatar size={1} />
                      </div>
                      <div className="playerinfo">
                        <p className="frplayerName">Cavid Qurbanov</p>
                        <p className="playerFlag">
                          <Flag className="Reyflacicn" /> Azerbaijan
                        </p>
                      </div>
                    </div>
                    <div className="fifaResult">6-0</div>
                    <div className="secondPlayer">
                      <div className="playerAvatar">
                        <Avatar size={1} />
                      </div>
                      <div className="playerinfo1">
                        <p className="frplayerName">Rahib Rzayev</p>
                        <p className="playerFlag">
                          <Flag className="Reyflacicn" /> Azerbaijan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
