import React from "react";
import "../css/home.css";
import Header from "./Header";
import Iframe from "./Iframe";
import { useSelector } from "react-redux";

function Home() {
  const url = useSelector((state) => state.urlAddress);
  console.log(url);
  return (
    <>
      <Header />

      <div className="iframe__div row mr-0 ml-0">
        <div className="iframe__one col-md-6 col-12 mt-4">
          <div className="iframes">
            <Iframe url={url ? url.input1 : ""} />
          </div>
        </div>

        <div className="iframe__two col-md-6 col-12 mt-4">
          <div className="iframes">
            <Iframe url={url ? url.input2 : ""} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
