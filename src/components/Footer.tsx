import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FooteStyled } from "./styleds";
import FooterIcon from "../assets/images/home/footerIcon.png";
import footerTwitter from "../assets/images/home/footerTwitter.png";
import footerTel from "../assets/images/home/footerTel.png";
import footerDiscord from "../assets/images/home/footerDiscord.png";

export default function Footer() {
  const history = useHistory();
  useEffect(() => {
    /* 监听路由的变化 */
    history.listen(() => {
      /*页面回到顶部 */
      if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
        window.scrollTo(0, 0);
      }
    });
  }, [history]);

  return (
    <FooteStyled>
      <div className="container">
        <div className="item">
          <img src={FooterIcon} alt="" />
          <p>Copyright ️2023 WorldCash. All Rights Reserved</p>
        </div>
        <div className="item">
          <span onClick={()=>window.open('https://twitter.com/WorldCashWorld')}><img src={footerTwitter} alt="" /></span>
          <span onClick={()=>window.open('https://t.me/Worldcashworld')}><img src={footerTel} alt="" /></span>
          <span onClick={()=>window.open('https://discord.gg/4ev8KNdArc')}><img src={footerDiscord} alt="" /></span>
        </div>
      </div>
    </FooteStyled>
  );
}
