import React,{useEffect} from "react";
// import ContactImg from "../assets/home/icon_telegram.png";
import PageLogo from "../assets/images/nav-icons/logoNew.svg";
import { useHistory } from "react-router-dom";
// import TwitterIcon from "../assets/home/icon_twitter.png";
// import DiscordIcon from "../assets/home/icon_DiscordIcon.png";
// import FaceBookIcon from "../assets/home/facebook_icon.png";
// import MediumIcon from "../assets/home/icon_medium.png";
// import RedditIcon from "../assets/home/icon_reddit.png";
// import TiktokIcon from "../assets/home/icon_tiktok.png";
// import YoutubeIcon from "../assets/home/icon_youtube.png";
// import GithubIcon from "../assets/home/icon_github.png";
// import YouxiangIcon from "../assets/home/icon_youxiang.png";
// import Image from 'next/image'

// eslint-disable-next-line react/jsx-no-target-blank

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
    <div className="footer-bottom">
      <div className="bottom-logo">
        <a href="https://ethanim.network/" className="logoTit">
          <img style={{width:'215px'}} className="logo" alt="" src={PageLogo}></img>
        </a>
        {/* <img src={} alt="" /> */}
        <div className="head-text">
          Copyright © Ethanim Corp. All Rights Reserved
        </div>
      </div>

      <div className="contact-box">
        <div className="shareBox">
          <a
            target="_blank"
            href="https://t.me/Ethanim_Network"
            rel="noopener noreferrer"
          >
            {/* <Image src={ContactImg} alt=""></Image> */}
            {/* <img src={ContactImg} alt="" /> */}
          </a>
          <a
            target="_blank"
            href="https://discord.com/invite/Uzkat3zarz"
            rel="noopener noreferrer"
          >
            {/* <Image src={DiscordIcon} alt=""></Image> */}
            {/* <img src={DiscordIcon} alt="" /> */}
          </a>
          <a
            target="_blank"
            href="https://ethanimnetwork.medium.com/"
            rel="noopener noreferrer"
          >
           
          </a>
          <a
            target="_blank"
            href="https://www.reddit.com/r/ethanimnetwork/"
            rel="noopener noreferrer"
          >
            
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/ethanimnetwork"
            rel="noopener noreferrer"
          > 
          </a>

          <a
            target="_blank"
            
            href="https://www.tiktok.com/ethanimnetwork/"
            rel="noopener noreferrer"
          >
           
          </a>
          <a
            target="_blank"
            href="https://twitter.com/Ethanim_Network"
            rel="noopener noreferrer"
          >
            {/* <Image src={DiscordIcon} alt=""></Image> */}
            {/* <img src={TwitterIcon} alt="" /> */}
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC9tw-okGAgxOHWIDot9KUcw"
            rel="noopener noreferrer"
          >
           
          </a>
          <a
            target="_blank"
            href="https://github.com/EthanimNetwork"
            rel="noopener noreferrer"
          >
          
          </a>
          <a
            target="_blank"
            href="mailto:contact@ethanim.network"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </div>
    </div>
  );
}
