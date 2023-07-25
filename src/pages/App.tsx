// @ts-nocheck
import React, { Suspense } from "react";
// import styled from 'styled-components'
import { Route, Switch, HashRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import TextLoader from "../components/Loader/TextLoader";
import Web3ReactManager from "../components/Web3ReactManager";
import routes from "./routes";
import NavHeader from "../components/Header/NavHeader";
import Footer from "../components/Footer";
import "../i18n/config";
import styled from "styled-components";
export const Marginer = styled.div`
  ${({ theme }) => theme.desktop}
`;


const materialTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {

  return (
    <MaterialThemeProvider theme={materialTheme}>
     {
      <div
      
      id="root"
      style={{
        background: "#fff",
        minHeight:'100vh'
      }}
    >
      <HashRouter >
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
            <Footer></Footer>
          </Web3ReactManager>
        </Suspense>
      </HashRouter>
    </div>
     }
      
    </MaterialThemeProvider>
  );
}

export default App;
