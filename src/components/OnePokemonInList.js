import React from 'react';
import Icon from './Icon'
import { Row, Col, Container, Card, CardImg,CardBody } from 'reactstrap';

export const renderTypes = (types,id) => {
    return types.map(type => {
        return (
        <Col xs="3" sm="6" key={`${id}-${type}`}>
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
                    <Container fluid>
                        <Row className="justify-content-center">{renderTypes(type,id)}</Row>
                    </Container>
                    </CardBody>
            </Card>
        )
}

export default OnePokemonInList;