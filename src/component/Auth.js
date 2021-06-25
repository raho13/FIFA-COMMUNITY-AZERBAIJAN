import React, { useEffect } from "react";
import Layout from "./Layout";
import { useRecoilState } from "recoil";
import { isLoged } from "../Atoms/global";
import axios from "axios";
import Preloader from "./Preloader";
export default function Auth() {
  const [isLogin, setisLogin] = useRecoilState(isLoged);
  useEffect(() => {
    if (!isLogin) {
      axios
        .get("private_room")
        .then((res) => {
          setisLogin(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <div id="opscnt">
          <Layout />
        </div>
      ) : (
        <Preloader size={1} />
      )}
    </>
  );
}
