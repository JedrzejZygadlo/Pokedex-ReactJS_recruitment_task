import React from 'react';
import Icon from './Icon'
import {Row, Col, Container, Card, CardImg,CardBody, CardTitle } from 'reactstrap';

export const renderTypes = (types) => {
    return types.map(type => {
        return (
        <Col xs="3" sm="6">
            <Icon iconType = {type} />
        </Col>
        )
    })};

const OnePokemonInList = (props) => {
    const { id, img, num, name, type} = props.pokemon;
    return(
            <Card body outline color="secondary" className="text-center">
                    <CardImg className="mx-auto img-width" src={img} alt={id}/>
                    <CardBody>
                    <h5 className="mt-2">#{num} {name}</h5>
                    <Container fluid key={id}>
                        <Row className="justify-content-center">{renderTypes(type)}</Row>
                    </Container>
                    </CardBody>
            </Card>
        )
}

export default OnePokemonInList;