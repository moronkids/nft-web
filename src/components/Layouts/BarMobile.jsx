import React, { useContext } from "react";
import { Hooks } from "@/providers";

function BarMobile() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            <a href="#home-desc">Description</a>
          </li>
          <li>
            <a href="#home-faq">FAQ</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BarMobile;
