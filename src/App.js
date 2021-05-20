import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./HOC/ErrorBoundary";
import './App.css';
const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./pages/Home"));
const Error404 = lazy(() => import("./pages/404"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  return (
    <ErrorBoundary>
    <Suspense fallback={<h1>Loading Web App...</h1>}>
      <div className="App">
        <div >
          <Router>
            <Nav  />
            <div className="this">
           
              <Suspense fallback={<h1>Loading Web App...</h1>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/Skills" component={Skills} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Contact" component={Contact} /> */}
                    <Route
                      path="*"
                      render={() => <p className="link">
                        <Error404/>
                      </p>}
                    />
               
                </Switch>
              </Suspense>
            </div>
          </Router>
          <Footer />
        </div>
      </div>
    </Suspense>
  </ErrorBoundary>
  );
}

export default App;
