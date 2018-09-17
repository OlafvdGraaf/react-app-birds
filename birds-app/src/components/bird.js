import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';
import { NavItem, NavLink, Button,  Container, Row, Col, Table  } from 'reactstrap';
import { birdList } from '../birds.js';

export class Bird extends Component {
    constructor(props){
        super(props)

        this.sightedBird = this.sightedBird.bind(this);
        this.getBirdSighting = this.getBirdSighting.bind(this);

        const { match: { params } } = this.props;

        const bird = birdList[params.birdId];

        this.state = {
            bird,
        }

    }

    sightedBird(){
        const bird = this.state.bird;

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

    getBirdSighting(){
        const bird = this.state.bird;

        return localStorage.getItem(bird.nederlanse_naam.toLowerCase());
    }

    render() {

      return (
        <Container>
            <Row>
                <Col> <h1> {this.state.bird.nederlanse_naam + ' / ' + this.state.bird.engelse_naam} </h1> </Col>
            </Row>

            <Row>
                <Col> <h3> {this.state.bird.soort_en + ' / ' + this.state.bird.soort_nl} </h3> </Col>
            </Row>

            <Row>
                <Col> <h3> Te vinden in: </h3> </Col>
            </Row>

            <Row>
            <Table>
                <thead>
                    <tr>
                        <th>Soss.</th>
                        <th>Swak.</th>
                        <th>Etosh</th>
                        <th>Caprivi</th>
                        <th>Chobe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> {this.state.bird.Soss}     </th>
                        <th> {this.state.bird.Swak}     </th>
                        <th> {this.state.bird.Etosh}    </th>
                        <th> {this.state.bird.Caprivi}  </th>
                        <th> {this.state.bird.Chobe}    </th>
                    </tr>
                </tbody>
            </Table>
            </Row>

            <Row>
                <Col><h3>Bijzonderheden:</h3></Col>
            </Row>
            <Row>
                <Col>{
                    this.state.bird.Bijz === "X" ? 
                        <h3>n.v.t.</h3>
                    :
                        <h3>{this.state.bird.Bijz}</h3>
                    }</Col>
            </Row>

            {
                this.getBirdSighting() === "true" ?
                    <Button color="success" size="sm" onClick={this.sightedBird}>gespot</Button>
                : 
                    <Button color="danger" size="sm" onClick={this.sightedBird}>niet gespot</Button>
            }

            <NavLink tag={Link} to="/Birds" active> <Button color="info"> {"<--"} Terug naar alle vogeltjes </Button></NavLink>
        </Container>
      );
    }
};