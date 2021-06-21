import React from "react";
import Layout from "./component/Layout";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <div id="opscnt">
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </div>
  );
}
