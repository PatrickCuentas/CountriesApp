import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { CountryScreen } from "../components/CountryScreen.jsx";
import { HomeScreen } from "../components/HomeScreen.jsx";
import { ThemeMode } from "../components/ThemeMode.jsx";
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
              <CountryScreen />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
