import { useContext } from "react";
import { Hooks } from "@/providers";

function NavbarMobile() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="navbar-mobile" onClick={() => setBarMobile(!barMobile)}>
        <nav role="navigation">
          <div>
            <span className="connect">Connect Wallet</span>
          </div>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu"></ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarMobile;
