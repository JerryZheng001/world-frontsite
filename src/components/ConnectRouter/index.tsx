import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { updateNavMenuShowState } from '../../state/application/actions'
import store from '../../state'

const notShowNavMenuList = ['/MasterApe', '/APE']

export default function ConnectRouter(Component: any) {
  return function Inner(props: any) {
    const loaction = useLocation()
    const isShow = notShowNavMenuList.indexOf(loaction.pathname) === -1
    useEffect(() => {
      store.dispatch(updateNavMenuShowState({ isShow }))

      if (isShow) return
      const docEl = document.documentElement,
        resizeEvent = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        reCalc = () => {
          const clientWidth = docEl.clientWidth
          if (!clientWidth) return
          docEl.style.fontSize = 50 * (clientWidth / 1440) + 'px'
        },
        clearCalc = () => {
          docEl.style.fontSize = 'inherit'
        }
      if (!document.addEventListener) return
      reCalc()
      window.addEventListener(resizeEvent, reCalc, false)
      document.addEventListener('DOMContentLoaded', reCalc, false)

      return () => {
        clearCalc()
        window.removeEventListener(resizeEvent, reCalc, false)
        document.removeEventListener('DOMContentLoaded', reCalc, false)
      }
    }, [isShow])
    return <Component {...props} />
  }
}
