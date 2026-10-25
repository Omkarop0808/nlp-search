import './App.css';
import React from "react";
import Home from "./Pages/Home/Home";
import Zoom from "./Pages/Zoom/Zoom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from "./Pages/About/About";
import Legal from "./Pages/Legal/legal";

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src="/logo.png" height="30"
                                 className="d-inline-block align-top" alt=""/> Timeless AI
                        </Link>

                        <div className="collapse navbar-collapse" style={{justifyContent: "flex-end"}}
                             id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Youtube Video</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/zoom">Zoom Transcript</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/legal">Legal Document</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/zoom'>
                        <Zoom/>
                    </Route>
                    <Route exact path='/legal'>
                        <Legal/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                </Switch>
                <div className="footer">
                    <div className="container">
                        <img src="/logo.png" height="20"
                             className="d-inline-block align-top" alt=""/> Timeless AI
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
