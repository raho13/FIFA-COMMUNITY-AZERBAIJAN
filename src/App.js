import React,{useEffect} from "react";
import Layout from "./component/Layout";
import { RecoilRoot } from "recoil";
export default function App() {
  useEffect(() => {
  console.log(localStorage.getItem("fut.az"))
  }, [])
  return (
    <RecoilRoot>
      <div id="opscnt">
        <Layout />
      </div>
    </RecoilRoot>
  );
}
