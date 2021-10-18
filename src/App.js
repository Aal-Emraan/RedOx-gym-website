import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Shop from './components/Home/Shop/Shop';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Enroll from './components/Plans/Enroll/Enroll';
import Plans from './components/Plans/Plans';
import Footer from './components/Shared/Footer/Footer';
import NavBar from './components/Shared/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/plans">
            <Plans></Plans>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/enroll/:id">
            <Enroll></Enroll>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
