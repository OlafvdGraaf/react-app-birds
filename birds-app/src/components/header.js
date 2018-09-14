import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    } from 'reactstrap';


export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
      return (

        <header className="App-header">

            {/*<h1 className="App-title">De Frim87 vogels app</h1>*/}
            {<h1 className="App-title">React test-app</h1>}

            <div>
                <Navbar color="dark" dark expand="md">
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/" active> <Button color="info"> Home </Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/Birds" active> <Button color="info"> vogeltjes </Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/About" active> <Button color="info"> Over </Button></NavLink>
                        </NavItem> 
                    </Nav>
                </Navbar>
            </div>

        </header>

      );
    }
  };