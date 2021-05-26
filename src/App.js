import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
