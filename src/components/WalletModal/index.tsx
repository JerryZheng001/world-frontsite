// @ts-nocheck
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import PcModal from "../Modal/PcModal";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";
import styled from "styled-components";
import MetamaskIcon from "../../assets/images/metamask.png";
import { ReactComponent as Close } from "../../assets/images/x.svg";
import { fortmatic, injected, portis } from "../../connectors";
import { OVERLAY_READY } from "../../connectors/Fortmatic";
import { SUPPORTED_WALLETS } from "../../constants";
import usePrevious from "../../hooks/usePrevious";
import { ApplicationModal } from "../../state/application/actions";

import {
  useModalOpen,
  useWalletModalToggle,
} from "../../state/application/hooks";

import AccountDetails from "../AccountDetails";
import Option from "./Option";
import PendingView from "./PendingView";

const CloseIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`;

const Wrapper = styled.div`
   margin: 0;
  padding: 0;
  width: 100%;
  background: #22262F;
  border-radius: 16px;
  backdrop-filter: blur(29px);
`;

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  font-weight: 500;
  color: ${(props) =>
    props.color === "blue" ? ({ theme }) => theme.primary1 : "#fff"};
  text-align: left;
  font-weight: bold;
  line-height: 20px;
  font-size: 20px;
  padding-left: 30px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
  display: flex;
  /* justify-content: center; */
`;

const ContentWrapper = styled.div`
  padding: 2rem 2rem 52px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  .errclass {
    img{
        width: 16px;
        height: 16px;
        margin-right:10px;
      }
      color:#FF1D4E;

  }
  .conWrapper {
    .compact {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 18px;
      /* margin-bottom: 50px; */
      cursor: pointer;
      input {
        border-radius: 50%;
        margin-right: 10px;
      }
      span {
        color: ${({ theme }) => theme.text3};
      }
    }
    .errorClass{
      margin:10px 0 0 0;
      img{
        width: 16px;
        height: 16px;
        margin-right:10px;
      }
      color:#FF1D4E;

    }
    h5 {
      margin-top:50px;
      color: #fff;
      font-size: 14px;
    }
  }
  h5 {
    color: #fff;
  }

  /* ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`}; */
`;

const UpperSection = styled.div`
  position: relative;
  padding: 32px 0;
  /* background: ${({ theme }) => theme.gradient1}; */

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`;
const HeaderRowErr = styled.div`
  color: #fff;
  height: 32px;
  font-size: 24px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 32px;
  text-align: center;
`




const ContentErrorWrapper = styled.div`
    padding-top: 24px;
    
    .text{
      font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
    text-align: center;
    padding: 0 8px;
    }
    .ok{
      width: 146px;
height: 40px;
border-radius: 8px;
border: 1px solid #353945;
margin: 32px auto 0;
text-align: center;
line-height: 40px;
font-size: 14px;
font-family: Poppins-SemiBold, Poppins;
font-weight: 600;
color: #FFFFFF;
cursor: pointer;
&:hover{
  background: #fff;
  border: none;
  color: #000;
}
    }
`
// const Blurb = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 2rem;
//   ${({ theme }) => theme.mediaWidth.upToMedium`
//     margin: 1rem;
//     font-size: 12px;
//   `};
// `

const OptionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  >button{
    margin-bottom: 12px;
    &:last-child{
      margin-bottom: 0;
    }
  }
`;


const ChangedButton = styled.div`
cursor: pointer;
  width: 146px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #353945;
  font-size: 14px;
font-family: Poppins-Medium, Poppins;
font-weight: 500;
color: #FFFFFF;
text-align: center;
line-height: 40px;
&:hover{
  border: none;
  background: #fff;
  color: #000;
}
`
const WALLET_VIEWS = {
  OPTIONS: "options",
  OPTIONS_SECONDARY: "options_secondary",
  ACCOUNT: "account",
  PENDING: "pending",
};

export default function WalletModal({
  pendingTransactions,
  confirmedTransactions,
  ENSName,
}: {
  pendingTransactions: string[]; // hashes of pending
  confirmedTransactions: string[]; // hashes of confirmed
  ENSName?: string;
}) {
  // important that these are destructed from the account-specific web3-react context
  const { active, account, connector, activate, error } = useWeb3React();

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

  const [pendingWallet, setPendingWallet] = useState<
    AbstractConnector | undefined
  >();

  const [pendingError, setPendingError] = useState<boolean>();

  const walletModalOpen = useModalOpen(ApplicationModal.WALLET);
  const toggleWalletModal = useWalletModalToggle();

  const previousAccount = usePrevious(account);


  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal();
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]);

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]);

  // close modal when a connection is successful
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);
  useEffect(() => {
    if (
      walletModalOpen &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    walletModalOpen,
    activePrevious,
    connectorPrevious,
  ]);

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    let name = "";

    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return (name = SUPPORTED_WALLETS[key].name);
      }
      return true;
    });
    // log selected wallet
    ReactGA.event({
      category: "Wallet",
      action: "Change Wallet",
      label: name,
    });
    setPendingWallet(connector); // set wallet for pending view
    // setWalletView(WALLET_VIEWS.PENDING); //change

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }

    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector); // a little janky...can't use setError because the connector isn't set
        } else {
          setPendingError(false);
        }
      });
  };

  // close wallet modal if fortmatic modal is active
  useEffect(() => {
    fortmatic.on(OVERLAY_READY, () => {
      toggleWalletModal();
    });
  }, [toggleWalletModal]);

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      if (isMobile) {
        //disable portis on mobile for now
        if (option.connector === portis) {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => {
                option.connector !== connector &&
                  !option.href &&
                  tryActivation(option.connector);
              }}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={require("../../assets/images/" + option.iconName)}
              size={21}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === "MetaMask") {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                color={"#E8831D"}
                header={"Metamask"}
                subheader={null}
                link={"https://metamask.io/"}
                icon={MetamaskIcon}
              />
            );
          } else {
            return null; //dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        // else if (option.name === "MetaMask" && !isMetamask) {

        //   return null;
        // }
        // likewise for generic
        else if (option.name === "Injected" && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              option.connector === connector
                  ?  toggleWalletModal()
                  : !option.href && tryActivation(option.connector);
            }}
            key={key}
            active={option.connector === connector}
            color={option.color}
            link={option.href}
            header={option.name}
            subheader={null} //use OptionCard.descriptio to bring back multi-line
            icon={require("../../assets/images/" + option.iconName)}
            size={34}
          />
        )
      );
    });
  }

  function getModalContent() {
    if (error) {
      return (
        <UpperSection >
          <CloseIcon onClick={toggleWalletModal}>
            <CloseColor title='close'/>
          </CloseIcon>
          <HeaderRowErr>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</HeaderRowErr>
          <ContentErrorWrapper>
            {error instanceof UnsupportedChainIdError ? (
             <div className="text">Please connect to the Binance Smart Chain network.</div>
            ) : (
              'Error connecting. Try refreshing the page.'
            )}
            <div className="ok" onClick={toggleWalletModal}>OK</div>
          </ContentErrorWrapper>
        </UpperSection>
      );
    }
    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return (
        <AccountDetails
          toggleWalletModal={toggleWalletModal}
          pendingTransactions={pendingTransactions}
          confirmedTransactions={confirmedTransactions}
          ENSName={ENSName}
          openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
        />
      );
    }
    return (
      <UpperSection>
       {
          walletView === WALLET_VIEWS.ACCOUNT &&( <CloseIcon onClick={toggleWalletModal}>
            <CloseColor />
          </CloseIcon>)
        }
         {walletView === WALLET_VIEWS.ACCOUNT && (
          <HeaderRow>
            Connect to a wallet
          </HeaderRow>
        )}
        {walletView === WALLET_VIEWS.PENDING ?
          (
            <PendingView
              connector={pendingWallet}
              error={pendingError}
              setPendingError={setPendingError}
              tryActivation={tryActivation}
            >
              <ChangedButton
                onClick={() => {
                  setPendingError(false)
                  setWalletView(WALLET_VIEWS.ACCOUNT)
                }}
              >
                Change Wallet
              </ChangedButton>
            </PendingView>
            ): (
              <ContentWrapper>
            <OptionGrid>{getOptions()}</OptionGrid>
            </ContentWrapper>
            )}
      </UpperSection>
    );
  }

  return (
    <PcModal
      isOpen={walletModalOpen}
      onDismiss={toggleWalletModal}
      minHeight={false}
      maxHeight={514}
      maxWidth={548}
      minWidth={384}
    >
      <Wrapper>{getModalContent()}</Wrapper>
    </PcModal>
  );
}
