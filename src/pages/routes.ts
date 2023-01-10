import { lazy } from 'react'
import ConnectRouter from '../components/ConnectRouter'
const HomePage = lazy(() => import('./homePage'))
const ContractDetection = lazy(() => import('./ContractDetection'))



// const NotFound = lazy(() => import('./single/NotFound'))

// eslint-disable-next-line
export default [
  {
    name: 'Home',
    path: '/',
    show: true,
    component: ConnectRouter(HomePage)
  },
  {
    name: 'Home',
    path: '/home',
    show: true,
    component: ConnectRouter(HomePage)
  },
  {
    name: 'ContractDetection',
    path: '/contract_detection',
    show: true,
    component: ConnectRouter(ContractDetection)
  }
  // {
  //   name: 'NotFound',
  //   path: '*',
  //   show: true,
  //   component: ConnectRouter(NotFound)
  // },
]
