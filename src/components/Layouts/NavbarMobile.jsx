import { useContext } from "react";
import { Hooks } from "providers";

function NavbarMobile() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="navbar-mobile">
        <nav role="navigation">
          <div>
            <a href="http://">
              <span className="connect">Connect Wallet</span>
            </a>
          </div>
          <div id="menuToggle" onClick={() => setBarMobile(!barMobile)}>
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
