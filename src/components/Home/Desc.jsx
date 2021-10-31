import React from "react";
import Roadmap from "@/assets/img/roadmap.jpg";
import Fade from "react-reveal/Fade";
function Desc() {
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container">
          <ol>
            <Fade bottom>
              <li>
                <div className="title">What is NFT Pizzeria?</div>
                <div>
                  NFT Pizzeria is a collection of 3174 uniquely and
                  algorithmically generated humanized Pizza Slice. Owning a NFT
                  pizzeria, is not just holding an NFT but it’s also owning a
                  piece of ownership of the first NFT Pizzeria Restaurant. In
                  Fact, our main goal is to open the first Physical NFT Pizzeria
                  in the World and be the First Project to let the first members
                  to be able to customize their own NFT Pizza Slice. Once the
                  100 Pizza Slice will be made, NFT Pizzeria will be open
                  randomly during the week and will let few lucky Discord
                  members to order customized pizza.
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className="title">
                  Pizza isn’t a trend, it’s a way of life
                </div>
                <div>
                  NFT Pizza Slice = 0.99 SOL
                  <ul>
                    <li
                      style={{
                        border: "none",
                        padding: "0px",
                        listStyle: "disc",
                      }}
                    >
                      {" "}
                      Unique Pizza Slice
                    </li>
                    <li
                      style={{
                        border: "none",
                        padding: "0px",
                        listStyle: "disc",
                      }}
                    >
                      Earning will build the first NFT Physical Pizzeria in the
                      world
                    </li>
                    <li
                      style={{
                        border: "none",
                        padding: "0px",
                        listStyle: "disc",
                      }}
                    >
                      Lucky Members will be able to customize their NFT Pizza
                      Slice
                    </li>
                  </ul>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className="title">
                  Focus 100% on the NFT Pizzeria Holders
                </div>
                <div>
                  We are working so hard to make NFT Pizzeria holders proud of
                  our work. Holders will have access to exclusive giveaways,
                  prizes, whitelist for future NFT project but most important
                  will help the team decided the location and the design of the
                  first Physical NFT Pizzeria restaurant. Also, they will earn
                  profit from it. <br />
                  <br /> Each Pizza Slice is different since all are uniquely
                  generated with more than 100+ attributes. The first 100 people
                  to join the server will have the possibility to customize
                  their pizza according to the NFT Pizzeria Menu. If you can’t
                  make in the first 100 don’t worries, there are going to be
                  weekly but limited giveaways where you will have the chance to
                  customize your own pizza slice. We will open the digital NFT
                  pizzeria randomly, so be active.
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className="title">
                  LONG TERM MIDSET: the best NFT investment you can ever make.
                </div>
                <div>
                  <img src={Roadmap} alt="" width="100%" height="100%" />
                </div>
              </li>
            </Fade>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Desc;
