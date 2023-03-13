import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getTestResult } from "../../../utils/fetch/detect";
import ErrModel from "./ErrModel";
import logo from "../../../assets/images/contrastDetecPro/logo.png";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  ColorTexts,
  Container,
  ContractDetectionDetailProDom,
  Disclaimer,
  Executive,
  Findings,
  ItemsIntro,
  Line,
  Summary,
  TitText,
} from "../stylePro";
import EchartsShow from "./echartsShow";
import { getEnv } from "../../../utils/base/string";
import ScrollLink from "../../../components/ScrollLink";
dayjs.extend(utc);

const baseURL = getEnv("REACT_APP_DEV_REQUEST_URL");

interface Issue {
  type: string;
  count: number;
  ratio: string;
}

interface InfoData {
  title_time: string;
  type: string;
  time: string;
  language: string;
  chian: string;
  methods: string;
  code_source: string;
  certificate_code: string;
  issues: Issue[];
  contract_address: string;
}

interface ResultDetailList {
  id: number;
  title: string;
  level: string;
  description: string;
}
interface EchartList {
  type: string;
  count: number;
  ratio: string;
}

interface SummaryInfoList {
  contract_name: string;
  problems_number: number;
  info: Info[];
}

interface Info {
  title: string;
  id: string;
  level: string;
}

interface FindDateList {
  id: string;
  level: string;
  description: string;
  recommend: string[];
  title: string;
}

export default function ContractDetectionDetail(params: any): JSX.Element {
  const history = useHistory();
  const [IntroInfo, setIntroInfo] = useState({} as InfoData);
  const [SummaryInfo, setSummaryInfo] = useState({} as SummaryInfoList);
  const [SummaryDate, setSummaryDate] = useState([] as Info[]);
  const [echartDate, setechartDate] = useState([] as EchartList[]);
  const [FindDate, setFindDate] = useState([] as FindDateList[]);
  const [ToTalItems, setToTalItems] = useState(0);
  const [ErrOpen, setErrOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  //报告详情
  const getReportDetail = (id: any) => {
    getTestResult({ id }).then((res: any) => {
      if (res.code === 200) {
        if (JSON.stringify(res.data) === "{}") {
          setErrOpen(true);
          seterrorMsg(res.msg);
        } else {
          const { executive, summary, findings } = res.data;
          const { issues } = executive;
          const { info } = summary;

          const newIssues = issues.map((item: EchartList, index: number) => {
            return {
              ...item,
              type:
                item.type === "high"
                  ? "Critical"
                  : item.type === "medium"
                  ? "Medium"
                  : item.type === "low"
                  ? "Low"
                  : "Passed",
            };
          });
          const ToTalItems = issues.reduce((pre = 0, cur: EchartList) => {
            return pre + cur.count;
          }, 0);

          setToTalItems(ToTalItems);
          setIntroInfo(executive);
          setechartDate(newIssues);
          setSummaryInfo(summary);
          setSummaryDate(info);

          const newFindingDate = Object.values(findings).map(
            (item: any, index) => {
              return { ...item, title: Object.keys(findings)[index] };
            }
          );
          setFindDate(newFindingDate);
        }
      } else {
        setErrOpen(true);
        seterrorMsg(res.msg);
      }
    });
  };

  //分享twitter
  const shareTwitter = () => {
    const toOpen = function (url: string) {
      const option =
        "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350";
      window.open(url, "_blank", option);
    };

    const title = `I detected a Smart Contract in @TriathonLab Come together and detect your smart contract %23Triathon`;
    const href =
      encodeURIComponent(document.location.href) ||
      encodeURIComponent(window.location.href);
    // const href = 'https://www.triathon.space/contract_detection';

    toOpen("https://twitter.com/share/?text=" + title + "&url=" + href);
  };

  //关闭错误弹框
  const closeErrTip = () => {
    setErrOpen(false);
    seterrorMsg("");
    history.push("/contract_detection");
  };

  useEffect(() => {
    window?.scrollTo(0, 0);

    const {
      params: { id },
    } = params.match;
    getReportDetail(id);

    return () => {};
    // eslint-disable-next-line
  }, [params.match]);

  return (
    <ContractDetectionDetailProDom className="ContractDetectionDetail">
      <div className="maskDiv"></div>
      <Container>
        <div className="header">
          <div className="timer">
            {IntroInfo.title_time || "--"} — Triathon Verified{" "}
          </div>
          <Line className="up"></Line>
          <div className="con">
            <p>
              {SummaryInfo.contract_name || "--"}
              <img src={logo} alt="" />
            </p>
            <div className="text">
              The security assessment wos presented by Triathon, based on Core
              platform
            </div>
          </div>
          <Line className="down"></Line>
          <div className="button">
            <span
              onClick={() => {
                history.push("/");
              }}
            >
              Detect other Contract
            </span>
            <span
              className="share"
              onClick={() => {
                shareTwitter();
              }}
            ></span>
          </div>
        </div>
        <Executive>
          <TitText>Executive</TitText>
          <div className="con">
            <div className="left">
              {/* <ItemsIntro>
                            <div className="intro">Type</div>
                            <div>{IntroInfo.type || '--'}</div>
                        </ItemsIntro> */}
              <ItemsIntro>
                <div className="intro">Time</div>
                <div>{IntroInfo.time || "--"}</div>
              </ItemsIntro>
              <ItemsIntro>
                <div className="intro">Language</div>
                <div>{IntroInfo.language || "--"}</div>
              </ItemsIntro>
              <ItemsIntro>
                <div className="intro">Chain</div>
                <div className="chain">{IntroInfo.chian || "--"}</div>
              </ItemsIntro>
              {/* <ItemsIntro>
                <div className="intro">Methods</div>
                <div>{IntroInfo.methods || "--"}</div>
              </ItemsIntro> */}
              <ItemsIntro>
                <div className="intro">Code source</div>
                {/* <div>{IntroInfo.code_source || '--'}</div> */}
                <div>
                  {!IntroInfo.chian ? (
                    <a
                      href={
                        baseURL + `api/v1/download?id=${params.match.params.id}`
                      }
                    >
                      {`download >>`}
                    </a>
                  ) : (
                    <a
                      href={
                        IntroInfo.chian === "bsc"
                          ? `https://bscscan.com/address/${
                              IntroInfo.contract_address || ""
                            }`
                          : `https://etherscan.io/address/${
                              IntroInfo.contract_address || ""
                            }`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {IntroInfo.chian === "bsc"
                        ? `https://bscscan.com/address/` +
                          IntroInfo.contract_address.slice(0, 6) +
                          "..."
                        : `https://etherscan.io/address/` +
                          IntroInfo.contract_address.slice(0, 6) +
                          "..."}
                    </a>
                  )}
                </div>
              </ItemsIntro>
              <ItemsIntro>
                <div className="intro">Certificate Code</div>
                <div>{IntroInfo.certificate_code || "--"}</div>
              </ItemsIntro>
            </div>
            <div className="right">
              <div className="show">Total Item: {ToTalItems} </div>
              <EchartsShow echdata={echartDate} />
            </div>
          </div>
        </Executive>

        <Summary>
          {/* <TitText>Summary of findings</TitText> */}

          <div className="sumaryIntro">
            <div className="head">
              <div className="id">
                Id
                <div className="tips">
                  <div className="tipsCon">
                    <span></span>
                    The full name of TSP is Token Security Project,which is the
                    security library of CORE, the underlying driver platform of
                    Triathon
                  </div>
                </div>
              </div>
              <div className="des">
                Description
                <br />
                <i>
                  {" "}
                  (Click the title below to check the issue's description
                  recommendations)
                </i>
              </div>
              <div className="sev">Severity</div>
            </div>
            <div className="sumaryCon">
              {SummaryDate.length !== 0 ? (
                SummaryDate.map((item, index) => {
                  return (
                    <div className="items">
                      <div className="id">{item.id}</div>

                      <div className="des">
                        <ScrollLink href={`#${item.id}`}>
                          {item.title}
                        </ScrollLink>
                        {/* {item.title} */}
                      </div>
                      <div className="sev">
                        <ColorTexts type={item.level}>
                          {item.level === "High"
                            ? "High risk"
                            : item.level === "Medium"
                            ? "Medium risk"
                            : "Low risk"}
                        </ColorTexts>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty"> No Date ~ </div>
              )}
            </div>
          </div>
        </Summary>
        <Findings>
          <TitText>Findings</TitText>
          <div className="findCon">
            <div className="introText">
              Triathon has performed a security audit of the{" "}
              {SummaryInfo.contract_name || "--"} and has identified{" "}
              {SummaryInfo.problems_number || "0"} issues ranging across all
              severity levels. We recommend addressing all of these issues
              before deploying the code on a production environment.If the code
              has been deployed to the blockchain, we recommend replacing it
              according to the actual situation.
            </div>
            {FindDate.length !== 0 ? (
              FindDate.map((item, index) => {
                return (
                  <div className="fingItems" key={index} id={item.id}>
                    <div className="title">
                      <div>{item.title}</div>
                      <div className="right">{item.id}</div>
                    </div>
                    <div className="button">
                      <ColorTexts type={item.level}>
                        {item.level === "High"
                          ? "Severity : High risk"
                          : item.level === "Medium"
                          ? "Severity : Medium risk"
                          : "Severity : Low risk"}
                      </ColorTexts>
                    </div>
                    <div className="con">
                      <div>Description:</div>
                      <div>{item.description}</div>
                      <br />
                      <div className="green">Recommend:</div>
                      {item.recommend.map((item, index) => {
                        return (
                          <div className="itemsList" key={index}>
                            - {item}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty"> No Date ~ </div>
            )}
          </div>
        </Findings>
      </Container>
      <Disclaimer>
        <div className="container">
          <div className="tit">Disclaimer</div>
          <div className="text">
            This report is based on the scope of materials and documentation
            provided for a limited review at the time provided. Results may not
            be complete nor inclusive of all vulnerabilities. The review and
            this report are provided on an as-is, where-is, and as-available
            basis. You agree that your access and/or use, including but not
            limited to any associated services, products, protocols, platforms,
            content, and materials, will be at your sole risk. Blockchain
            technology remains under development and is subject to unknown risks
            and flaws. The review does not extend to the compiler layer, or any
            other areas beyond the programming language, or other programming
            aspects that could present security risks. A report does not
            indicate the endorsement of any particular project or team, nor
            guarantee its security. No third party should rely on the reports in
            any way, including for the purpose of making any decisions to buy or
            sell a product, service or any other asset.
          </div>
        </div>
      </Disclaimer>
      <ErrModel
        isOpen={ErrOpen}
        onDismiss={closeErrTip}
        errorMsg={errorMsg}
      ></ErrModel>
    </ContractDetectionDetailProDom>
  );
}
