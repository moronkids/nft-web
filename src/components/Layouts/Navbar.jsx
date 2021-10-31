import React, { useContext, useState } from "react";
import { Hooks } from "../../providers";

function Navbar() {
  const { setScroll, scroll, barMobile, setBarMobile } = useContext(Hooks);

  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            <li>
              <span>Connect Wallet</span>
            </li>
            <li>
              <a href="#home-desc">DESCRIPTION</a>
            </li>
            <li>
              <a href="#home-faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
