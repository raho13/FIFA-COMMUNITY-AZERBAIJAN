import React from "react";
import Layout from "./component/Layout";
// import  './scss/main.scss'
import Menuprovider from "./context";
export default function App() {
  return (
    <div id='opscnt'>
      <Menuprovider>
        <Layout />
      </Menuprovider>
    </div>
  );
}
