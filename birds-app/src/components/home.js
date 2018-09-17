import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import { Header } from './header.js';

export class Home extends Component {
    render() {
      return (
        <div>
            <h1> Test site, list of birds with attributes </h1>
            <h6>Voor de zoekfunctie, je kan naar 'gespot' of 'niet gespot' zoeken, voor niet of wel gespotte vogels.</h6>
            <h6>Je kan ook zoeken op gebieden: sossesvlei, swakopmund, etosha, caprivi of chobe</h6>
        </div>
      );
    }
};