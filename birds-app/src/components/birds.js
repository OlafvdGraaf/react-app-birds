import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';
import { Header } from './header.js';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col, InputGroup, InputGroupAddon, Input, 
    InputGroupText
} from 'reactstrap';
import { birdList } from '../birds.js';

export class Birds extends Component {
    constructor(props){
        super(props)

        this.sightedBird = this.sightedBird.bind(this);
        this.getBirdSighting = this.getBirdSighting.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getbirdIndex = this.getbirdIndex.bind(this);

        this.state = {
            list : birdList,
            filteredList : birdList
        }
    }
    sightedBird(bird){
        if(
            localStorage.getItem(bird.nederlanse_naam.toLowerCase()) === null ||
            localStorage.getItem(bird.nederlanse_naam.toLowerCase()) === "false"
        ){
            localStorage.setItem(bird.nederlanse_naam.toLowerCase(), "true");
        }else{
            localStorage.setItem(bird.nederlanse_naam.toLowerCase(), "false");
        }
        this.setState({});
    }

    getBirdSighting(bird){
        return localStorage.getItem(bird.nederlanse_naam.toLowerCase());
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

        const searchString = event.target.value.toLowerCase();

        const listToFilter = this.state.list.filter(
            bird => 
                searchString.includes(bird.nederlanse_naam.toLowerCase()) ||
                searchString.includes(bird.engelse_naam.toLowerCase())  ||
                searchString.includes(bird.engelse_naam.toLowerCase()) ||
                searchString.includes(bird.soort_en.toLowerCase()) ||
                searchString.includes(bird.soort_nl.toLowerCase()) ||
                searchString.includes(bird.latijnse_naam.toLowerCase()) || 
                searchString.includes(bird.Bijz.toLowerCase()) || 
                searchString === "gespot" && this.getBirdSighting(bird) === "true" || 
                searchString === "niet gespot" && this.getBirdSighting(bird) === "false" || this.getBirdSighting(bird) === null 
                ||
                searchString.includes("sossesvlei") && bird.Soss.toLowerCase() !== "x" ||
                searchString.includes("swakopmund") && bird.Swak.toLowerCase() !== "x" ||
                searchString.includes("etosha") && bird.Etosh.toLowerCase() !== "x" ||
                searchString.includes("caprivi") && bird.Caprivi.toLowerCase() !== "x" ||
                searchString.includes("chobe") && bird.Chobe.toLowerCase() !== "x"
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
                        <InputGroupAddon addonType="prepend">Filter:</InputGroupAddon>
                        <Input placeholder="naam, gebied, soort, bijz., gespot . . ." onChange={this.handleChange}/>
                    </InputGroup>
                </Col>
            </Row>

            <h3>Totaal: {this.state.filteredList.length}</h3>
            <h6>Er worden er niet meer dan 300 getoond</h6>
            
            {this.state.filteredList.map( 
                (bird, index) => { 
                    if(index < 300
                    ){
                        return(
                            <Row>
                                <Col> 
                                    <Card body>
                                        <Row> <CardTitle>{bird.nederlanse_naam}</CardTitle> </Row>
                                        <Row> <CardTitle>{bird.engelse_naam }</CardTitle> </Row>
                                        <Row> <CardText> {bird.soort_nl + " / " + bird.soort_en} </CardText> </Row>
                                        <Row> <Button tag={Link} to={"/bird/" + this.getbirdIndex(bird)} color="info">meer info</Button> </Row>
                                        <Row> 
                                            {
                                                this.getBirdSighting(bird) === "true" ?
                                                    <Button color="success" size="sm" onClick={() => this.sightedBird(bird)}>gespot</Button>
                                                :
                                                    <Button color="danger" size="sm" onClick={() => this.sightedBird(bird)}>niet gespot</Button>
                                                
                                            }
                                        </Row> 
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