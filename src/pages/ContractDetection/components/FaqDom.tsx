import React, { useState } from "react";
import { JoinBastDom } from "../styled";

export default function FaqDom() {

  const Bastets: any = [
    {
      index: 1,
      flag: true,
      title:
        "1、Why does the amount of Worldcash token in my wallet keep increasing?",
      text:
        "Worldcash imposes a 4% tax on each transaction, with 2% flowing into the Worldcoin ecosystem fund and the remaining 2% distributed to Worldcash holders based on their token weight. So, if you consistently hold WC token, you will continuously receive transaction fee income.",
    },
    {
      index: 2,
      flag: true,
      title: "2、How can I participate in the Lottery draw?",
      text:
        "The Lottery draw opens once every hour.",
      text1:`By purchasing WC worth more than 100 USDT in the WC-USDT trading pair on
      Uniswap (velodrome), you can participate in the next hour's draw. Each purchase of 100
      USDT worth of WC counts as one entry.`,
      text2:`During each draw cycle, participants can check their winning status on the Lottery page
      (no gas fees required), and the winnings are automatically sent to the user's wallet.`
    },
    {
      index: 3,
      flag: true,
      title: "3、Do I need to have Worldcoin's Orb to use Worldcash?",
      text: `Nope, anyone with an Ethereum wallet address can freely use Worldcash. However, the
      Worldcash community will provide Orb devices from Worldcoin to the top 50 hodlers at
      an appropriate time and work towards making Worldcashdao a significant influential
      operator within the Worldcoin community`,
    },
    {
      index: 4,
      flag: true,
      title: `4、What are the main contract addresses for Worldcash?`,
      text: `Currently, the important smart contract addresses are as follows:`,
      text1:` - Worldcash token:`,
      text2:`- Worldcash liquidity lock contract address:`,
      text3: `- Worldcoin ecosystem foundation Airdrop distributor:`,
    },
    {
      index: 5,
      flag: true,
      title: `5、What is the significance of locking Worldcash liquidity?`,
      text: `The Worldcash team has initially provided liquidity for Worldcash on Uniswap
      (velodrome) and locked the LP tokens in the xxxx contract for one year. This means that
      for at least one year, no one can withdraw the Worldcash liquidity on Uniswap
      (velodrome).`,
    },
    {
      index: 6,
      flag: true,
      title: `6、When will Worldcash launch staking？`,
      text: `We will launch Worldcash single-coin staking and LP staking mining in Q3 2023. Please
      stay tuned to the official website for updates and information`,
    },
  ];
  const [Data, setData] = useState(Bastets);
  const [flag, setflag] = useState(false);

  const changeFlag = (index: number) => {
    Data.forEach((item11: any, index11: number) => {
      if (index11 !== index) {
        item11.flag = true;
      }
    });
    setflag(!flag);
    if (Data[index].flag) {
      Data[index].flag = false;
    } else {
      Data[index].flag = true;
    }
    setData(Data);
  };

  return (
    <JoinBastDom>
      {Data.map((e: any, index: number) => {
        return (
          <div className="bastet_list" key={index}>
            <div className="bastet_title" onClick={() => changeFlag(index)}>
              <div>
                {/* <p className={!e.flag ? "active" : ""}>{e.index}</p> */}
                <p className={!e.flag ? "activeTit" : ""}>{e.title}</p>
              </div>
              <div
                className={`${e.flag ? "change_icon_down" : "change_icon_up"}`}
              ></div>
            </div>
            {!e.flag && (
              <div className="bastet_text">
                <div>{e.text}</div>
                {e.text1 && <div>{e.text1}</div>}
                {e.text2 && <div>{e.text2}</div>}
                {e.text3 && <div>{e.text3}</div>}
                {e.text4 && <div>{e.text4}</div>}
                {e.text5 && <div>{e.text5}</div>}
              </div>
            )}
          </div>
        );
      })}
    </JoinBastDom>
  );
}
