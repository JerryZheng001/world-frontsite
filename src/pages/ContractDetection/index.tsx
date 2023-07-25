import React from "react";
import TwitterIcon from "../../assets/images/home/twitter.png";
import TelegramIcon from "../../assets/images/home/telegram.png";
import DiscordIcon from "../../assets/images/home/discord.png";
import ZoraIcon from "../../assets/images/home/zora.png";
import DecentIcon from "../../assets/images/home/decent.png";
import ZealyIcon from "../../assets/images/home/zealy.png";
import WorldIcon from "../../assets/images/home/world.png";
// import PieChart from "./components/echarts";
import Icon1 from "../../assets/images/home/Licon1.png";
import Icon2 from "../../assets/images/home/Licon2.png";
import Icon3 from "../../assets/images/home/Licon3.png";
import PieIcon from "../../assets/images/home/pie.png";
import FaqDom from "./components/FaqDom";
import { Tooltip } from "antd";

import "./antd.scss";

import { ContainerCon } from "./styled";

export default function ContractDetection(): JSX.Element {
  return (
    <ContainerCon className="ContractDetection">
      <div className="homeContainer">
        <div className="content">
          <h1>We are committed to providing comprehensive ecological </h1>
          <h1>services and empowerment for Worldcoin。</h1>
          {/* icon */}
          <div className="socialIcom">
            <img
              src={TwitterIcon}
              alt=""
              onClick={() =>
                window.open(
                  "https://twitter.com/WorldCashWorld"
                )
              }
            />
            <img
              src={TelegramIcon}
              alt=""
              onClick={() => window.open("https://t.me/Worldcashworld")}
            />
            <img
              src={DiscordIcon}
              alt=""
              onClick={() =>
                window.open("https://discord.gg/4ev8KNdArc")
              }
            />
          </div>
        </div>
      </div>
      <div className="content1">
        <div className="container">
          <div className="item">
            <h3>Who are we?</h3>
            <p>
              World Cash is a payment solution specifically tailored for the
              World Coin ecosystem. It is not only an innovative digital
              currency but also an integral part of our vision for a
              transparent, fair, and balanced new world. In this world, we
              firmly believe that wealth equality is a crucial foundation for
              constructing social justice and harmony.
            </p>
          </div>
          <div className="item">
            <h3>What is our mission?</h3>
            <p>
              The mission of World Cash is clear - to provide a path to improve
              the quality of life for 3.6 billion people globally who have a
              daily income of less than $5 through its payment system. We
              understand that economic means are crucial for these individuals
              to truly achieve better living conditions and quality. However,
              our vision goes beyond this. We aspire, through World Cash, for
              everyone to attain genuine economic freedom and independence.
              Regardless of their location or income level, as long as they use
              World Cash, they will have an opportunity to lead better lives.
              This is the founding principle of World Cash and our ultimate
              goal.
            </p>
          </div>
        </div>
      </div>
      <div className="content content2">
        <div className="title"> Who is eligible to claim WC tokens?</div>
        <div className="Iconcontainer">
          <div className="item">
            <img src={ZoraIcon} alt="" />
            <p>Zora NFT holder</p>
          </div>
          <div className="item">
            {" "}
            <img src={DecentIcon} alt="" />
            <p>Decent NFT holder</p>
          </div>
          <div className="item">
            {" "}
            <img src={ZealyIcon} alt="" />
            <p>Zealy Points</p>
          </div>
          <div className="item">
            <img src={WorldIcon} alt="" />
            <p>WorldCoin holder</p>
          </div>
        </div>
        {/* btn claim */}
        <div className="BtnCon">
          <Tooltip placement="bottom" title="comingSoon">
            <span className="Btnstyle"> Go Claim</span>
          </Tooltip>
        </div>
      </div>
      {/* PieChart */}
      <div className="contentpie">
        {/* <PieChart /> */}
        <div className="item">
          <h3>Token Economics</h3>
          <p>Charge a 4% transaction fee for each trade.</p>
          <p>Usage of tax revenue:</p>
          <p>Holders 2%, Liquidity pool 2%</p>
        </div>
        <div className="item">
          <img src={PieIcon} alt="" />
        </div>
        <div className="item">
          <p>
            <span style={{ background: `rgba(230, 230, 230, 1)` }}></span>初始
            LP
          </p>
          <p>
            <span style={{ background: `rgba(222, 222, 222, 1)` }}></span>Zealy
            Points
          </p>
          <p>
            <span style={{ background: `rgba(209, 209, 209, 1)` }}></span>
            WorldCoin ecosystem
          </p>
          <p>
            <span style={{ background: `rgba(184, 184, 184, 1)` }}></span>
            Zora NFT Holder Decen tNFT Holder
          </p>
        </div>
      </div>
      <div className="content2">
        <div className="title">Luckdrop</div>
        <div className="text">The community incentivizes holders who contribute to the cause of WorldCash</div>
        <div className="Iconcontainer">
          <div className="items">
            <img src={Icon1} alt="" />
            <h3>1.Qualification acquisition</h3>
            <p>Get one vote for every $100 of WC purchased</p>
          </div>
          <div className="items">
            <img src={Icon2} alt="" />
            <h3>2.等待公布奖励</h3>
            <p>Luckdrop每1个小时开奖一次</p>
            <p></p>
          </div>
          <div className="items">
            <img src={Icon3} alt="" />
            <h3>3.Awaiting reward announcement</h3>
            <p>Luckdrop draws once every hour</p>
          </div>
        </div>
        {/* btn claim */}
        <div className="BtnCon">
          <span className="Btnstyle"> Join </span>
        </div>
      </div>
      {/* FAO */}
      <div className="content2" id="faqdom">
        <div className="title" style={{ marginBottom: "30px" }}>
          FAQ
        </div>
        <FaqDom />
      </div>
    </ContainerCon>
  );
}
