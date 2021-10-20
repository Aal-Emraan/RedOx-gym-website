import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Home/Home';
import AllShopProducts from './components/Home/Shop/AllShopProducts';
import ProductDetails from './components/Home/Shop/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AllPlans from './components/Plans/AllPlans';
import Course from './components/Plans/Course/Course';
import Purchase from './components/Plans/Purchase/Purchase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import NavBar from './components/Shared/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/plans">
              <AllPlans></AllPlans>
            </PrivateRoute>
            <PrivateRoute path="/shop">
              <AllShopProducts></AllShopProducts>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/course/:id">
              <Course></Course>
            </PrivateRoute>
            <Route path="/purchase">
              <Purchase></Purchase>
            </Route>
            <PrivateRoute path="/product/:pid">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
