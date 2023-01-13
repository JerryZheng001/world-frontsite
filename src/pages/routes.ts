import { lazy } from 'react'
import ConnectRouter from '../components/ConnectRouter'
// const HomePage = lazy(() => import('./homePage'))
const ContractDetection = lazy(() => import('./ContractDetection'))
const ContractDetectionDetail = lazy(() => import('./ContractDetection/component/ContractDetectionDetail'))
const ContractDetectionHistory = lazy(() => import('./ContractDetection/component/ContractDetectionHistory'))



// const NotFound = lazy(() => import('./single/NotFound'))

// eslint-disable-next-line
export default [
  {
    name: 'contract_detection',
    path:'/',
    show: true,
    component:ConnectRouter(ContractDetection)
  },

 
  {
    name: 'ContractDetection',
    path: '/contract_detection',
    show: true,
    component: ConnectRouter(ContractDetection)
  },
  {
    name: 'ContractDetectionHistory',
    path: '/contract_detection/history',
    show: true,
    component: ConnectRouter(ContractDetectionHistory)
  },
  {
    name: 'ContractDetectionDetail',
    path: '/contract_detection/:id',
    show: true,
    component: ConnectRouter(ContractDetectionDetail)
  },
  
  // {
  //   name: 'NotFound',
  //   path: '*',
  //   show: true,
  //   component: ConnectRouter(NotFound)
  // },
]
