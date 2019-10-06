import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalHeader, ModalBody, Container, Row, Col} from 'reactstrap';
import { fetchSinglePokemon, hideModal } from '../actions';
import Icon from './Icon';
import '../assets/Modal.css';
class SinglePokemonInfo extends React.Component {
    componentDidMount(){
       this.props.fetchSinglePokemon(this.props.modalid);
    }
    toogle(){
        
    }
    renderWeaknesses = (weaknesses,id) => {
    return weaknesses.map(weakness => {
        return (
        <Col xs="6" md="3" lg="2" className="marginsInSmall"  key={`${id}-${weakness}`}>
                <Icon iconType = {weakness} />     
        </Col>
        )
    })};
    renderTypes = (types,id) => {
    return types.map(type => {
        return (
        <Col xs="6" sm="4" md="3" lg="2" key={`${id}-${type}`}>
                <Icon iconType = {type} />     
        </Col>
        )
    })};
    render(){
        
        if(this.props.loading){
            return(
                <div>
                    Loading
                </div>
            )
        }
        if(this.props.singlePokemon){
            const { id, num, name, img, type, egg, candy, candy_count, height, weight, spawn_chance, spawn_time, weaknesses} = this.props.singlePokemon;
            return(
                
                    <Modal size="lg" className="mt-2" isOpen={this.props.modal} toggle={() => this.props.hideModal()}>
                        <ModalHeader toggle={() => this.props.hideModal()}>#{num} {name}</ModalHeader>
                    <ModalBody className="pt-0">
                        <Container className="text-center">
                                <Row className="justify-content-center">
                                <Col xs="10" className="justify-self-center">
                                        <h1>{name}</h1>
                                        <img src={img} alt={name} />
                                    <Container>
                                        <Row className=" mt-2 d-flex align-items-center justify-content-center"> <h4>INFO</h4> </Row>
                                        <Row>
                                        <Col xs="12" sm="6" md="4" className="d-flex align-items-center justify-content-center marginsInSmall">
                                            <FontAwesomeIcon icon={['fas','ruler-vertical']} size="3x" color="#428bca" className="mx-3"/> <h4>{height}</h4> 
                                        </Col>
                                        <Col xs="12" sm="6" md="4" className="d-flex align-items-center justify-content-center marginsInSmall">
                                            <FontAwesomeIcon icon={['fas','weight']} size="3x" color="#428bca" className="mx-3"/> <h4>{weight}</h4>
                                        </Col>
                                        <Col xs="12" sm="6" md="4" className="d-flex align-items-center justify-content-center marginsInSmall">
                                            <FontAwesomeIcon icon={['fas','egg']} size="3x" color="#428bca" className="mx-3"/> <h4>{egg}</h4>
                                        </Col>
                                        </Row>                                  
                                    </Container>
                                    <Container >
                                        <Row className=" mt-4 mb-2 justify-content-center"><h4>TYPE</h4> </Row>
                                        <Row className="justify-content-center">{this.renderTypes(type,id)}</Row>
                                    </Container>
                                    <Container >
                                        <Row className=" mt-4 mb-2 justify-content-center"> <h4>CANDYS</h4> </Row>
                                        <Row className="justify-content-center">
                                        <Container>
                                            <Row className=" d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={['fas','candy-cane']} size="3x" color="#428bca" className="mx-3"/>
                                            <h3>{candy_count}</h3>
                                            </Row>
                                            {candy === "None" ? <h4>This pokemon has no candys</h4> : <h5>{candy}</h5>}
                                        </Container>
                                        <Col>
                                            
                                        </Col>
                                        </Row>
                                    </Container>
                                    
                                        <Container>
                                        <Row className=" mt-4 mb-2 justify-content-center"><h4>SPAWN</h4> </Row>
                                        <Row className=" d-flex align-items-center justify-content-center">
                                        <Col xs="12" sm="6" lg="4" className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={['fas','clock']} size="3x" color="#428bca" className="mx-3"/> 
                                            <h4>{spawn_time}</h4>
                                        </Col>
                                        <Col xs="12" sm="6" lg="4" className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={['fas','dice-six']} size="3x" color="#428bca" className="mx-3"/> 
                                            <h4>{spawn_chance}</h4>
                                        </Col>
                                        </Row>
                                    </Container>
                                    <Container>
                                        <Row className=" mt-4 mb-2 justify-content-center"><h4>WEAKNESSES</h4> </Row>
                                        <Row className="justify-content-center">{this.renderWeaknesses(weaknesses,id)}</Row>
                                    </Container>
                                </Col>
                                </Row>
                        </Container>
                    </ModalBody>
                    
                    </Modal>
    )
            
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.singlePokemon.isLoading,
        error: state.singlePokemon.error,
        singlePokemon: state.singlePokemon.pokemonInfo,
        modal: state.singlePokemon.modal,
        modalid: state.singlePokemon.modalid
    }
}

export default connect(mapStateToProps, { fetchSinglePokemon, hideModal })(SinglePokemonInfo)
