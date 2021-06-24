import React from "react";
import Layout from "./component/Layout";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <RecoilRoot>
      <div id="opscnt">
        <Layout />
      </div>
    </RecoilRoot>
  );
}
