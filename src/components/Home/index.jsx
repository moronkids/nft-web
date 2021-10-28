import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Banner from "@/components/Home/Banner";
import Desc from "@/components/Home/Desc";
import Faq from "@/components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "@/providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 5000);
  }, []);
  return (
    <div>
      {timer ? (
        <LoadingScreen />
      ) : (
        <>
          <Zoom top>
            <Banner />
          </Zoom>
          <Desc />
          <div
            className=""
            style={{
              background: "#616167",
              paddingTop: "30px",
              paddingBottom: "70px",
            }}
          >
            <Faq />
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
