import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ThemeMode from '../components/ThemeMode.jsx'
import HomeScreen from '../components/HomeScreen.jsx'
import LoadingView from '../components/LoadingView.jsx'
const CountryScreen = lazy(() => import('../components/CountryScreen.jsx'))

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <header className="mb-8">
          <div className="bg-white dark:bg-dark-blue px-5 py-8 flex justify-between shadow-lg">
            <h1 className="font-bold text-xl dark:text-white">
              <Link to="/">Where in the World</Link>
            </h1>
            <ThemeMode />
          </div>
        </header>
        <div className="px-5">
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/:countryId">
              <Suspense fallback={<LoadingView />}>
                <CountryScreen />
              </Suspense>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
