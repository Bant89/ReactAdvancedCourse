import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        {/* Si nunca otra ruta esta matcheando usa la default */}
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
