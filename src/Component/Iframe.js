import React from "react";
import "../css/iframe.css";

function Iframe({ url }) {
  return (
    <iframe src={url} width="100%" height="100%" title="description"></iframe>
  );
}

export default Iframe;
