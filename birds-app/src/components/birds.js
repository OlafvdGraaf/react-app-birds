import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';
import { Header } from './header.js';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import { birdList } from '../birds.js';

export class Birds extends Component {
    constructor(props){
        super(props)

        this.state = {
            list : birdList,
            filteredList : []
        }
    }

    render() {
      return (
        <div>
            <Container>
                    
                    {this.state.list.map( 
                        (bird, index) => 
                        <Row>
                            <Col>
                                <Card body>
                                    <CardTitle>{ bird.nederlanse_naam + " / " + bird.engelse_naam }</CardTitle>
                                    <CardText> {bird.soort_nl + " / " + bird.soort_en} </CardText>
                                    <NavLink tag={Link} to={"/bird/" + index} active> <Button color="info">meer info</Button> </NavLink>
                                        
                                </Card>
                            </Col>
                        </Row>
                    )}
            </Container>
        </div>
      );
    }
};