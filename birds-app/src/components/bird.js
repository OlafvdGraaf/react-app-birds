import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';
import { NavItem, NavLink, Button,  Container, Row, Col, Table  } from 'reactstrap';
import { birdList } from '../birds.js';

export class Bird extends Component {
    constructor(props){
        super(props)
        const { match: { params } } = this.props;

        const bird = birdList[params.birdId];

        this.state = {
            bird,
        }

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
                        <th>Bijz.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> {this.state.bird.Soss}     </th>
                        <th> {this.state.bird.Swak}     </th>
                        <th> {this.state.bird.Etosh}    </th>
                        <th> {this.state.bird.Caprivi}  </th>
                        <th> {this.state.bird.Chobe}    </th>
                        <th> {this.state.bird.Bijz}     </th>
                    </tr>
                </tbody>
            </Table>
            </Row>

            <NavLink tag={Link} to="/Birds" active> <Button color="info"> {"<--"} Terug naar alle vogeltjes </Button></NavLink>
        </Container>
      );
    }
};