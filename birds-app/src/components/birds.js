import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';
import { Header } from './header.js';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { birdList } from '../birds.js';

export class Birds extends Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.getbirdIndex = this.getbirdIndex.bind(this);

        this.state = {
            list : birdList,
            filteredList : birdList,
        }
    }

    getbirdIndex(bird){
        return this.state.list.indexOf(bird);
    }

    handleChange(event){
        if(event.target.value == ""){
            this.setState({
                filteredList : this.state.list
            });
            return ; 
        };

        const listToFilter = this.state.list.filter(
            bird => 
                bird.nederlanse_naam.toLowerCase().includes(event.target.value) ||
                bird.engelse_naam.toLowerCase().includes(event.target.value)  ||
                bird.engelse_naam.toLowerCase().includes(event.target.value) ||
                bird.soort_en.toLowerCase().includes(event.target.value) ||
                bird.soort_nl.toLowerCase().includes(event.target.value) ||
                bird.latijnse_naam.toLowerCase().includes(event.target.value)
        )

        this.setState({
            filteredList : listToFilter
        });
    }

    render() {
      return (
        <Container>
            <Row> 
                <Col>
                    <InputGroup >
                        <InputGroupAddon addonType="prepend">Filter</InputGroupAddon>
                        <Input placeholder="naam, gebied, soort" onChange={this.handleChange}/>
                    </InputGroup>
                </Col>
            </Row>

            <h3>Totaal: {this.state.filteredList.length}</h3>
            
            {this.state.filteredList.map( 
                (bird, index) => { 
                    if(index < 20
                    ){
                        return(
                            <Row>
                                <Col> <Card body>
                                        <Row> <CardTitle>{bird.nederlanse_naam}</CardTitle> </Row>
                                        <Row> <CardTitle>{bird.engelse_naam }</CardTitle> </Row>
                                        <Row> <CardText> {bird.soort_nl + " / " + bird.soort_en} </CardText> </Row>
                                        <Row> <NavLink tag={Link} to={"/bird/" + this.getbirdIndex(bird)} active> <Button color="info">meer info</Button> </NavLink> </Row>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    }
                }
            )}
        </Container>
      );
    }
};