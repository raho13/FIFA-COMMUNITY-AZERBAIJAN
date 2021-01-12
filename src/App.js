import React from "react";
import Layout from "./component/Layout";
import Menuprovider from "./context";
export default function App() {
  return (
    <div>
      <Menuprovider>
        <Layout />
      </Menuprovider>
    </div>
  );
}
