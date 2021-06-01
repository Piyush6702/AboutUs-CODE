import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./HOC/ErrorBoundary";
import './App.css';
const Nav = lazy(() => import("./components/Nav"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/contact"));
const Home = lazy(() => import("./pages/Home"));
const Error404 = lazy(() => import("./pages/404"));
const Events = lazy(() => import("./pages/events"));
const Projects = lazy(() => import("./pages/projects"));
const Discussion = lazy(() => import("./pages/discussion"));
const Footer = lazy(() => import("./components/Footer"));
const Event_details = lazy(() => import("./components/event_details"));

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
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/events" component={Events} />
                    <Route path="/about" component={About} /> 
                    <Route path="/discussion" component={Discussion} /> 
                    <Route path="/event/id" exact component={Event_details} /> 
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
