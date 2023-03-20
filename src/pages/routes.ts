import { lazy } from "react";
import ConnectRouter from "../components/ConnectRouter";
// const HomePage = lazy(() => import('./homePage'))
const ContractDetection = lazy(() => import("./ContractDetection"));
const ContractDetectionDetail = lazy(
  () => import("./ContractDetection/component/ContractDetectionDetailPro")
);
const ContractDetectionHistory = lazy(
  () => import("./ContractDetection/component/ContractDetectionHistory")
);

// const NotFound = lazy(() => import('./single/NotFound'))

// eslint-disable-next-line
export default [
  {
    name: "contract_detection",
    path: "/",
    show: true,
    component: ConnectRouter(ContractDetection),
  },
  // {
  //   name: "contract_detection",
  //   path: "/wallet_detection",
  //   show: true,
  //   component: ConnectRouter(ContractDetection),
  // },
  {
    name: "ContractDetection",
    path: "/contract_detection",
    show: true,
    component: ConnectRouter(ContractDetection),
  },
  {
    name: "ContractDetectionHistory",
    path: "/wallet_security/detail/:id",
    show: true,
    component: ConnectRouter(ContractDetectionHistory),
  },
  {
    name: "ContractDetectionDetail",
    path: "/contract_detection/:id",
    show: true,
    component: ConnectRouter(ContractDetectionDetail),
  },

  // {
  //   name: 'NotFound',
  //   path: '*',
  //   show: true,
  //   component: ConnectRouter(NotFound)
  // },
];
