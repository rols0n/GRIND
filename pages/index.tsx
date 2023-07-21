import { useState } from "react";
import { createPortal } from "react-dom";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Main from "../components/Home/main";
import Pattern from "@/components/Home/pattern";
import Settings from "@/components/Home/settings";

function Home(props) {
  return (
    <>
      <Navbar toggleSettings={props.toggleSettings}></Navbar>
      <Main></Main>
      <Pattern></Pattern>
    </>
  );
}
export default Home;
