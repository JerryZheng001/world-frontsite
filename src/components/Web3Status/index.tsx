import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { darken } from "polished";
import React, { useMemo } from "react";
import styled from "styled-components";
import { NetworkContextName } from "../../constants";
import useENSName from "../../hooks/useENSName";
import { useHasSocks } from "../../hooks/useSocksBalance";
import { useWalletModalToggle } from "../../state/application/hooks";
import {
  isTransactionRecent,
  useAllTransactions,
} from "../../state/transactions/hooks";
import { TransactionDetails } from "../../state/transactions/reducer";
import {
  fortmatic,
  injected,
  portis,
  walletconnect,
  walletlink,
} from "../../connectors";
import CoinbaseWalletIcon from "../../assets/images/coinbaseWalletIcon.svg";
import FortmaticIcon from "../../assets/images/fortmaticIcon.png";
import PortisIcon from "../../assets/images/portisIcon.png";
import WalletConnectIcon from "../../assets/images/walletConnectIcon.svg";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { shortenAddress } from "../../utils";
import Loader from "../Loader";

import WalletModal from "../WalletModal";
// import useTheme from "../../hooks/useTheme";
import { ShowSmall, TYPE } from "../../theme";
// import { RowBetween } from "../Row";

const Web3StatusError = styled.div`
  cursor: pointer;
  width: 194px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: relative;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    border: 1px solid #ffffff;
    border-radius: 8px;

    z-index: -1;
  }
`;

const Web3StatusConnect = styled.div<{ faded?: boolean }>`
  cursor: pointer;
  width: 173px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: relative;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    border: 1px solid #ffffff;
    border-radius: 8px;

    z-index: -1;
  }
`;

const Web3StatusConnected = styled.div<{ pending?: boolean }>`
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
  :hover,
  :focus {
    color: ${({ pending, theme }) =>
      pending ? darken(0.1, theme.primary1) : theme.text1};
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
  cursor: pointer;
  width: 169px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: relative;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewX(-10deg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;

    z-index: -1;
  }
`;

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  width: fit-content;
  width: 100%;
  text-align: center;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  font-size: 14px;
`;

// const NetworkIcon = styled(Activity)`
//   margin-left: 0.25rem;
//   margin-right: 0.5rem;
//   width: 16px;
//   height: 16px;
// `
const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({ size }) => (size ? size + "px" : "32px")};
    width: ${({ size }) => (size ? size + "px" : "32px")};
  }
`;
const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: linear-gradient(
    135deg,
    #ffffff 4.17%,
    rgba(255, 255, 255, 0) 75%
  );
  border: 0.6px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
`;

// eslint-disable-next-line react/prop-types
function StatusIcon({ connector }: { connector: AbstractConnector }) {
  if (connector === injected) {
    return <Dot />;
  } else if (connector === walletconnect) {
    return (
      <IconWrapper size={16}>
        <img src={WalletConnectIcon} alt={""} />
      </IconWrapper>
    );
  } else if (connector === walletlink) {
    return (
      <IconWrapper size={16}>
        <img src={CoinbaseWalletIcon} alt={""} />
      </IconWrapper>
    );
  } else if (connector === fortmatic) {
    return (
      <IconWrapper size={16}>
        <img src={FortmaticIcon} alt={""} />
      </IconWrapper>
    );
  } else if (connector === portis) {
    return (
      <IconWrapper size={16}>
        <img src={PortisIcon} alt={""} />
      </IconWrapper>
    );
  }
  return null;
}

// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime;
}

const SOCK = (
  <span
    role="img"
    aria-label="has socks emoji"
    style={{ marginTop: -4, marginBottom: -4 }}
  >
    🧦
  </span>
);

const ShowDrapWidiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .show {
    padding-left: 0.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      margin: 0;
    }
  }
  .showpedding {
    padding-left: 0.1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      margin: 0;
    }
    .pedding {
      display: flex;
      align-items: center;
      > div {
        margin-right: 0.01rem;
      }
    }
  }
`;

function Web3StatusInner() {
  const { account, connector, error } = useWeb3React();

  const { ENSName } = useENSName(account ?? undefined);

  const allTransactions = useAllTransactions();

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  const pending = sortedRecentTransactions
    .filter((tx) => !tx.receipt)
    .map((tx) => tx.hash);
  const hasPendingTransactions = !!pending.length;
  const hasSocks = useHasSocks();
  const toggleWalletModal = useWalletModalToggle();
  // const theme = useTheme();

  if (account) {
    return (
      <>
        <Web3StatusConnected
          id="web3-status-connected"
          pending={hasPendingTransactions}
        >
          <ShowSmall>
            {!hasPendingTransactions && connector && (
              <StatusIcon connector={connector} />
            )}
          </ShowSmall>
          {hasPendingTransactions ? (
            <ShowDrapWidiv>
              <div className="showpedding">
                <div className="pedding">
                  <Loader showText={false} size="20px" padding="0" />
                  {pending?.length} Pending
                </div>
              </div>
            </ShowDrapWidiv>
          ) : (
            <ShowDrapWidiv>
              {hasSocks ? SOCK : null}
              <div className="show">
                <Text>{ENSName || shortenAddress(account ?? "")}</Text>
              </div>
            </ShowDrapWidiv>
          )}
        </Web3StatusConnected>
      </>
    );
  } else if (error) {
    return (
      // <Web3StatusError id="connect-error" onClick={toggleWalletModal} style={{ 'borderRadius': '24px' ,'width':'173px'}}>
      //   <Text>{error instanceof UnsupportedChainIdError ? 'Network Error' : 'Error'}</Text>
      // </Web3StatusError>
      <Web3StatusError id="connect-error" onClick={toggleWalletModal}>
        {error instanceof UnsupportedChainIdError
          ? "Please switch BSC"
          : "Error"}
      </Web3StatusError>
    );
  } else {
    return (
      <Web3StatusConnect
        id="connect-wallet"
        onClick={toggleWalletModal}
        faded={!account}
        style={{ borderRadius: "24px" }}
      >
        <TYPE.black fontSize={16}>Connect Wallet</TYPE.black>
      </Web3StatusConnect>
      // <TYPE.white id="connect-wallet" onClick={toggleWalletModal} color="#a8a8a8" fontSize={16}>{t('Connect Wallet')}</TYPE.white>
    );
  }
}

export default function Web3Status() {
  const { active, account } = useWeb3React();
  const contextNetwork = useWeb3React(NetworkContextName);
  const { ENSName } = useENSName(account ?? undefined);
  const allTransactions = useAllTransactions();
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);

  const pending = sortedRecentTransactions
    .filter((tx) => !tx.receipt)
    .map((tx) => tx.hash);
  const confirmed = sortedRecentTransactions
    .filter((tx) => tx.receipt)
    .map((tx) => tx.hash);
  if (!contextNetwork.active && !active) {
    return null;
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal
        ENSName={ENSName ?? undefined}
        pendingTransactions={pending}
        confirmedTransactions={confirmed}
      />
    </>
  );
}
