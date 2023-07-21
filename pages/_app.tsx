import "../styles/globals.scss";
import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import Settings from "@/components/Home/settings";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };
  return (
    <>
      <div id={`container`}>{showSettings && <Settings />}</div>
      <Component {...pageProps} toggleSettings={toggleSettings} />
    </>
  );
};

export default MyApp;
