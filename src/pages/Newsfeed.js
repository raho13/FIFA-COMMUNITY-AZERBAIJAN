import React, { useEffect, useState } from "react";
import bannerpromo from "../img/banner/banner-promo.jpg";
import promo from "../img/test/A4-1024x1024.jpg";
import promo1 from "../img/test/kompaniya-sayt-ucun (1).jpg";
import bannerimg from "../img/banner/newsfeed-icon.png";
import Banner from "../component/Banner";
import Members from "../component/newsfeed/Members";
import PostBanner from "../component/newsfeed/PostBanner";
import Pollmodel from "../component/Postmodels/Pollmodel";
import Videopost from "../component/Postmodels/Videopost";
import Simpletxtmodel from "../component/Postmodels/Simpletxtmodel";
import Imagespost from "../component/Postmodels/Imagespost";
import Sharepost from "../component/Postmodels/Sharepost";
import Gifpost from "../component/Postmodels/Gifpost";
import Votepost from "../component/Postmodels/Votepost";
import Avatar from "../component/Avatar";
import axios from "axios";
import Voteimgpost from "../component/Postmodels/Voteimgpost";
export default function Newsfeed() {
  useEffect(() => {
    Fechdata();
  }, []);

  const Fechdata = () => {
    axios
      .get("posts")
      .then((res) => {
        setposts(res.data.data.data);
        console.log(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [posts, setposts] = useState([]);
  const [tabIndex, settabIndex] = useState(1);
  const handleTabs = (i) => {
    if (i === tabIndex) {
      return "simple-tab-item active";
    } else {
      return "simple-tab-item";
    }
  };

  return (
    <>
      <div id="nwsnone">
        <Banner
          header="Newsfeed"
          img={bannerimg}
          des=" Check what your friends have been up to!"
        />
      </div>
      <div id="mobilestory">
        <div className="mystory">
          <Avatar txt="+" />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
        <div className="storyitem">
          <Avatar />
        </div>
      </div>
      <div className="grid grid-3-6-3 mobile-prefer-content">
        <div className="grid-column">
          <a className="banner-promo" target="_blank">
            <img src={bannerpromo} alt="banner-promo" />
          </a>
          <Members />
        </div>
        <div className="grid-column">
          <PostBanner />
          <div className="simple-tab-items">
            <form className="form">
              <div className="form-select">
                <select
                  id="newsfeed-filter-category"
                  name="newsfeed_filter_category"
                >
                  <option value={0}>Bütün paylaşımlar</option>
                  <option value={1}>FİFA Community Azerbaijan</option>
                  <option value={2}>İzlədiklərim</option>
                </select>
              </div>
            </form>
            <p
              onClick={() => {
                settabIndex(1);
              }}
              className={handleTabs(1)}
            >
              Bütün paylaşımlar
            </p>
            <p
              onClick={() => {
                settabIndex(2);
              }}
              className={handleTabs(2)}
            >
              FİFA Community Azerbaijan
            </p>
            <p
              onClick={() => {
                settabIndex(3);
              }}
              className={handleTabs(3)}
            >
              İzlədiklərim
            </p>
          </div>
          {/* {posts.map((post) => {
         if(post.type==='image'){
           return <Imagespost />
         }
        
          })} */}
          <Imagespost type={0} />
          <Voteimgpost />
          <Gifpost />
          {/*  <Votepost />
          <Sharepost />
          <Simpletxtmodel />
          <Pollmodel />
          <Videopost /> */}

          <div className="loader-bars">
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
            <div className="loader-bar" />
          </div>
        </div>
        <div className="grid-column" id="stc">
          <img className="promoimg" src={promo} />
          <img className="promoimg" src={promo1} />
          <img className="promoimg" src={promo} />
          <img className="promoimg" src={promo1} />
        </div>
      </div>
    </>
  );
}
