import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './components/home.js';
import { Birds } from './components/birds.js';
import { Bird } from './components/bird.js';
import { About } from './components/about.js';


export const routes = (
    <div>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/Birds" component={Birds}/>
        <Route path="/bird/:birdId" component={Bird} />
        <Route path="/About" component={About}/>
    </div>
);