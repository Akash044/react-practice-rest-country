import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Countries from './components/countries/Countries';
import Display from './components/display/Display';
import CountryDetails from './components/countryDetails/CountryDetails';
import Main from './components/main/Main';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          
          <Route path="/countries">
            <Display></Display>
          </Route>
          <Route path="/:id">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
          <Route path="*">
            <Countries></Countries>
          </Route>

        </Switch>

      </div>


    </Router>


  );
}

export default App;
