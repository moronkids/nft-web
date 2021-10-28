import React, { useContext, useState } from "react";
import { Hooks } from "../../providers";

function Navbar() {
  const { setScroll, scroll } = useContext(Hooks);

  return (
    <>
      <div
        className={`navbar active`}
        // className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <ul className="">
          <li>
            <span>Connect Wallet</span>
          </li>
          <li>DESCRIPTION</li>
          <li>FAQ</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
