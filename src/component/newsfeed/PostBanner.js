import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as Poll } from "../../icons/Poll.svg";
import { ReactComponent as Blogpost } from "../../icons/Blgpost.svg";
import { ReactComponent as Filevideoregular } from "../../icons/file-video-regular.svg";
import { ReactComponent as Codesolid } from "../../icons/code-solid.svg";
import { ReactComponent as Closeicn } from "../../icons/times-circle-solid.svg";
import { ReactComponent as PostSts } from "../../icons/PostSts.svg";
import { ReactComponent as Cameraicn } from "../../icons/Cameraicn.svg";
export default function PostBanner() {
  const [tab1, settab1] = useState("option-item active");
  const [Videoposttype, setVideoposttype] = useState(true);
  const [embedinp, setembedinp] = useState(false);
  const [parmsVisible, setparmsVisible] = useState(false);
  const [tab2, settab2] = useState("option-item");
  const [tab3, settab3] = useState("option-item");
  const [activeTab, setactiveTab] = useState(1);
  const [lists, setLists] = useState([]);
  const [rndm, setrndm] = useState(0);
  const deleteinput = (inp) => {
    var delele = lists.filter((item) => item != inp);
    setLists(delele);
  };
  const setparmVisible = () => {
    if (parmsVisible) {
      return "parms";
    } else {
      return "prmsnone";
    }
  };
  const Addinput = () => {
    const copyList = [...lists];
    copyList.push(rndm);
    setLists(copyList);
    setrndm(rndm + 1);
  };
  const inputFocus = (e) => {
    e.target.parentNode.setAttribute(
      "class",
      "form-input small bnnrinp active"
    );
  };
  const inputBlur = (e) => {
    if (e.target.value.length === 0) {
      e.target.parentNode.setAttribute("class", "form-input small bnnrinp");
    }
  };
  const ActiveTab = () => {
    if (activeTab === 1) {
      return (
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea t">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                />
              </div>
            </div>
          </div>
        </form>
      );
    } else if (activeTab === 2) {
      return (
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea t">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                />
                {embedinp ? (
                  <div className="inplist2">
                    <div className="form-input small bnnrinp">
                      <label htmlFor="account-full-name">Embed kod</label>
                      <input
                        type="text"
                        onFocus={(e) => {
                          inputFocus(e);
                        }}
                        onBlur={(e) => {
                          inputBlur(e);
                        }}
                      />
                    </div>
                    <Closeicn
                      onClick={() => {
                        setembedinp(false);
                      }}
                      className="quick-post-footer-action-icon icon-camera inplsticn"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder="Hi Marina! Share your post here..."
                />
                <div id="inpcontainer">
                  {Videoposttype ? (
                    <Scrollbars>
                      <div id="inpctrl">
                        <div className="form-input small bnnrinp">
                          <label htmlFor="account-full-name">
                            Anket sualı əlavə et
                          </label>
                          <input
                            type="text"
                            onFocus={(e) => {
                              inputFocus(e);
                            }}
                            onBlur={(e) => {
                              inputBlur(e);
                            }}
                          />
                        </div>
                      </div>

                      <div id="inpctrl">
                        <div className="form-input small bnnrinp">
                          <label htmlFor="account-full-name">Cavab</label>
                          <input
                            type="text"
                            onFocus={(e) => {
                              inputFocus(e);
                            }}
                            onBlur={(e) => {
                              inputBlur(e);
                            }}
                          />
                        </div>
                      </div>
                      <div id="inpctrl">
                        <div className="form-input small bnnrinp">
                          <label htmlFor="account-full-name">Cavab</label>
                          <input
                            type="text"
                            onFocus={(e) => {
                              inputFocus(e);
                            }}
                            onBlur={(e) => {
                              inputBlur(e);
                            }}
                          />
                        </div>
                      </div>

                      {lists.map((aList) => {
                        return (
                          <div id="inpctrl" key={aList}>
                            <div className="inplist">
                              <div className="form-input small bnnrinp">
                                <label htmlFor="account-full-name">Cavab</label>
                                <input
                                  type="text"
                                  onFocus={(e) => {
                                    inputFocus(e);
                                  }}
                                  onBlur={(e) => {
                                    inputBlur(e);
                                  }}
                                />
                              </div>
                              <Closeicn
                                onClick={() => {
                                  console.log(aList);
                                  deleteinput(aList);
                                }}
                                className="quick-post-footer-action-icon icon-camera inplsticn"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </Scrollbars>
                  ) : (
                    <div id="inpcontainer">
                      <Scrollbars>
                        <div id="inpctrl">
                          <div className="form-input small bnnrinp">
                            <label htmlFor="account-full-name">
                              Anket sualı əlavə et
                            </label>
                            <input
                              type="text"
                              onFocus={(e) => {
                                inputFocus(e);
                              }}
                              onBlur={(e) => {
                                inputBlur(e);
                              }}
                            />
                          </div>
                        </div>
                        <div id="inpctrl">
                          <div className="form-input small bnnrinp p">
                            <label htmlFor="account-full-name">Cavab</label>
                            <input
                              type="text"
                              onFocus={(e) => {
                                inputFocus(e);
                              }}
                              onBlur={(e) => {
                                inputBlur(e);
                              }}
                            />
                            <button
                              className="browsebtn button small secondary"
                              type="button"
                            >
                              Browse
                            </button>
                          </div>
                          <input
                            id="brwsinp"
                            type="file"
                            placeholder="upload"
                          ></input>
                        </div>

                        <div id="inpctrl">
                          <div className="form-input small bnnrinp p">
                            <label htmlFor="account-full-name">Cavab</label>
                            <input
                              type="text"
                              onFocus={(e) => {
                                inputFocus(e);
                              }}
                              onBlur={(e) => {
                                inputBlur(e);
                              }}
                            />
                            <button
                              className="browsebtn button small secondary"
                              type="button"
                            >
                              Browse
                            </button>
                          </div>
                          <input
                            id="brwsinp"
                            type="file"
                            placeholder="upload"
                          ></input>
                        </div>
                      </Scrollbars>
                    </div>
                  )}
                </div>
                <div className="postBtns">
                  {Videoposttype ? (
                    <p
                      onClick={() => {
                        Addinput();
                      }}
                      className="button primary postBtn"
                    >
                      Cavab əlavə et
                    </p>
                  ) : null}

                  {Videoposttype ? (
                    <p
                      onClick={() => {
                        setVideoposttype(!Videoposttype);
                      }}
                      className="button primary postBtn"
                    >
                      Şəkil anketi
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        setVideoposttype(!Videoposttype);
                      }}
                      className="button primary postBtn"
                    >
                      Sual anketi
                    </p>
                  )}
                  <div className="button primary postBtn" >
                    <p onClick={()=>{
                    setparmsVisible(!parmsVisible)
                  }} className="prmtxt">Parametrlər</p>
                    <div className={setparmVisible()}>
                      <div className="parmsitem">
                        <input type="checkbox" />
                        <p className="section-banner-text chktxt">
                          İnsanların birdən çox cavab əlavə etmsinnə icazə ver
                        </p>
                      </div>
                      <hr />
                      <div className="parmsitem">
                        <input type="checkbox" />
                        <p className="section-banner-text chktxt">
                          Hərkəsin şık əlavə etməsinə icazə ver
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }
  };
  const handleTab = (i) => {
    if (i === 1) {
      settab1("option-item active");
      settab2("option-item");
      settab3("option-item");
    } else if (i === 2) {
      settab1("option-item");
      settab2("option-item active");
      settab3("option-item");
    } else {
      settab1("option-item");
      settab2("option-item");
      settab3("option-item active");
    }
  };
  return (
    <div className="quick-post">
      <div className="quick-post-header">
        <div className="option-items">
          <div
            onClick={() => {
              handleTab(1);
              setactiveTab(1);
            }}
            className={tab1}
          >
            <PostSts className="option-item-icon icon-status" />
            <p className="option-item-title d">Status</p>
          </div>
          <div
            onClick={() => {
              handleTab(2);
              setactiveTab(2);
            }}
            className={tab2}
          >
            <Blogpost className="option-item-icon icon-blog-posts" />
            <p className="option-item-title d">Video Post</p>
          </div>
          <div
            onClick={() => {
              handleTab(3);
              setactiveTab(3);
            }}
            className={tab3}
          >
            <Poll className="option-item-icon icon-poll" />
            <p className="option-item-title d">Anket</p>
          </div>
        </div>
      </div>
      <div className="quick-post-body">{ActiveTab()}</div>
      <div className="quick-post-footer">
        <div className="quick-post-footer-actions">
          {activeTab === 1 ? (
            <div
              className="quick-post-footer-action text-tooltip-tft-medium"
              data-title="Insert Photo"
            >
              <Cameraicn className="quick-post-footer-action-icon icon-camera" />
              <input
                type="file"
                className="fileExp"
                placeholder="upload"
              ></input>
            </div>
          ) : activeTab === 2 ? (
            <div className="psticncontainer">
              <div
                onClick={() => {
                  setembedinp(false);
                }}
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert GIF"
              >
                <div className="fileExpctr">
                  <Filevideoregular className="quick-post-footer-action-icon icon-camera" />
                  <input
                    type="file"
                    className="fileExp"
                    placeholder="upload"
                  ></input>
                </div>
              </div>
              <div
                onClick={() => {
                  setembedinp(!embedinp);
                }}
                className="quick-post-footer-action text-tooltip-tft-medium"
                data-title="Insert GIF"
              >
                <Codesolid className="quick-post-footer-action-icon icon-camera" />
              </div>
            </div>
          ) : null}
        </div>
        <div className="quick-post-footer-actions">
          <p className="button small secondary">Post</p>
        </div>
      </div>
    </div>
  );
}
