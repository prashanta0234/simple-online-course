// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/footer/Footer';
import Service from './component/service/Service';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Error from './component/error/Error';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
