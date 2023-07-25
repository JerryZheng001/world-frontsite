import { lazy } from "react";
import ConnectRouter from "../components/ConnectRouter";

const Claimpage = lazy(() => import('./Claim/index'))
const ContractDetection = lazy(() => import("./ContractDetection"));
const Luckdroppage = lazy(() => import("./Luckdrop"));
// const NotFound = lazy(() => import('./single/NotFound'))

// eslint-disable-next-line
export default [
  {
    name: "contract_detection",
    path: "/",
    show: true,
    component: ConnectRouter(ContractDetection),
  },
  {
    name: "contract_detection",
    path: "/home",
    show: true,
    component: ConnectRouter(ContractDetection),
  },
  {
    name: "contract_detection",
    path: "/claim",
    show: true,
    component: ConnectRouter(Claimpage),
  },
  {
    name: "contract_detection",
    path: "/luckdrop",
    show: true,
    component: ConnectRouter(Luckdroppage),

  },
];
