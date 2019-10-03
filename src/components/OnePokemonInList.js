import React from 'react';
import Icon from './Icon'
import {Row, Col, Container } from 'reactstrap';

export const renderTypes = (types) => {
    return types.map(type => {
        return (
        <Col sm="6">
            <Icon iconType = {type} />
        </Col>
        )
    })};

const OnePokemonInList = (props) => {
    const { id, img, num, name, type} = props.pokemon;
    return(
            <Container key={id}>
                    <img src={img} alt={id}/>
                    <h2>#{num} {name}</h2>
                    <Row>{renderTypes(type)}</Row>
            </Container>
        )
}

export default OnePokemonInList;