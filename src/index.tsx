import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import Blocklist from "./components/Blocklist";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./state";
import ApplicationUpdater from "./state/application/updater";
import MulticallUpdater from "./state/multicall/updater";
import TransactionUpdater from "./state/transactions/updater";
import UserUpdater from "./state/user/updater";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";
import { NetworkContextName } from "./constants";
import getLibrary from "./utils/getLibrary";
import { getEnv } from "./utils/base/string";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

if (!!(window as any).ethereum) {
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}

const GOOGLE_ANALYTICS_ID: string | undefined = getEnv(
  "REACT_APP_GOOGLE_ANALYTICS_ID"
);
if (typeof GOOGLE_ANALYTICS_ID === "string") {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  ReactGA.set({
    customBrowserType: !isMobile
      ? "desktop"
      : "web3" in window || "ethereum" in window
      ? "mobileWeb3"
      : "mobileRegular",
  });
} else {
  ReactGA.initialize("test", { testMode: true, debug: true });
}

window.addEventListener("error", (error) => {
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true,
  });
});

function Updaters() {
  return (
    <>
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
}

ReactDOM.render(
  <StrictMode>
    <FixedGlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Blocklist>
          <Provider store={store}>
            <Updaters />
            <ThemeProvider>
              <ThemedGlobalStyle />
              <App />
            </ThemeProvider>
          </Provider>
        </Blocklist>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
