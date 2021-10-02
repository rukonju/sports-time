
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './Footer/Footer';


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
          <Route>
            <Home></Home>
          </Route>
          <Route>
            <Home></Home>
          </Route>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
