import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from 'containers/Home/Home';
import App from 'containers/App/App';
import Projects from 'containers/Projects/Projects';
import Skills from 'containers/Skills/Skills';
import Education from 'containers/Education/Education';
import Employment from 'containers/Employment/Employment';
import About_me from 'containers/About_me/About_me';
import Contact from 'containers/Contact/Contact';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About_me}/>
            <Route path="/employment" component={Employment}/>
            <Route path="/education" component={Education}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>

        </Route>
    </Router>
);