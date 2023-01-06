import { lazy } from 'react'
import ConnectRouter from '../components/ConnectRouter'
const HomePage = lazy(() => import('./homePage'))


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
  
  // {
  //   name: 'NotFound',
  //   path: '*',
  //   show: true,
  //   component: ConnectRouter(NotFound)
  // },
]
