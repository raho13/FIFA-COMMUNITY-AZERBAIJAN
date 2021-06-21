import Header from "./Header";
import Navbar from "./Navbar";
import { useRecoilState } from "recoil";
import Chatwidget from "./Chatwidget";
import FloatyBar from "./FloatyBar";
import MobileNavbar from "./MobileNavbar";
import Navigation from "./Navigation";
import Imagepopup from "../component/newsfeed/Imagepopup";
import { BrowserRouter as Router } from "react-router-dom";
import { imagePopup, mobilemenuVisibility } from "../Atoms/global";
import Register from "../pages/Register";

export default function Layout() {
  const [MmenuVisible, setMmenuVisible] = useRecoilState(mobilemenuVisibility);
  const [popup, setpopup] = useRecoilState(imagePopup);
  const Containeropacity = () => {
    if (MmenuVisible) {
      return "containeropacity";
    } else {
      return null;
    }
  };
  const templaterender = () => {
    if (window.location.pathname == "/register") {
      return <Register />;
    } else {
      return (
        <Router>
          {popuphandler()}
          <Navbar />
          <Chatwidget />
          <div id={Containeropacity()}>
            <Navigation />
            <Header />
            <FloatyBar />
          </div>
          <MobileNavbar />
        </Router>
      );
    }
  };

  const popuphandler = () => {
    if (popup.vis) {
      return <Imagepopup />;
    }
  };
  return templaterender();
}
