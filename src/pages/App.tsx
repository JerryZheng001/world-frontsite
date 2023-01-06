// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
// import styled from 'styled-components'
import { Route, Switch, HashRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
// import MainPage from "./homePage";
import TextLoader from "../components/Loader/TextLoader";
import Web3ReactManager from "../components/Web3ReactManager";
// import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import routes from "./routes";
import NavHeader from "../components/Header/NavHeader";
// import Footer from "../components/Footer";
import "../i18n/config";
import styled from "styled-components";
export const Marginer = styled.div`
  ${({ theme }) => theme.desktop}
`;

// function TopLevelModals() {
//   const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
//   const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
//   return <AddressClaimModal isOpen={open} onDismiss={toggle} />
// }

const materialTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    resizeFun();
  }, []);

  const resizeFun = () => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <MaterialThemeProvider theme={materialTheme}>
     
      <div
        id="root"
        style={{
          background: "#04041E",
          display: flag === true ? "block" : "none",
          height:'100vh'
        }}
      >
        <HashRouter>
          <NavHeader />
          <Suspense fallback={<TextLoader />}>
            <Web3ReactManager>
              <Switch>
                {/* <Route path="/" component={MainPage} /> */}
                {/* <Route component={DarkModeQueryParamReader} /> */}
                {routes.map(({ path, component, show }, index) => {
                  return (
                    show && (
                      <Route
                        exact
                        strict
                        path={path}
                        component={component}
                        key={index}
                      />
                    )
                  );
                })}
              </Switch>
              {/* <Footer></Footer> */}
            </Web3ReactManager>
          </Suspense>
        </HashRouter>
      </div>
    </MaterialThemeProvider>
  );
}

export default App;
