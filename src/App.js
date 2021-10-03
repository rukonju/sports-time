
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './Footer/Footer';
import AllSports from './components/AllSports/AllSports';
import EngTeams from './components/EngTeams/EngTeams';
import LaTeams from './components/LaTeams/LaTeams';
import Details from './components/Details/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/all_sports'>
            <AllSports></AllSports>
          </Route>
          <Route exact path='/english_league'>
            <EngTeams></EngTeams>
          </Route>
          <Route exact path="/english_league/:teamId">
            <Details></Details>
          </Route>
          <Route path='/la_liga'>
            <LaTeams></LaTeams>
          </Route>
        </Switch>
        <Footer></Footer>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
