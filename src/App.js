import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Product from './pages/product'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route path="/product">
            <Layout>
              <Product  />
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
