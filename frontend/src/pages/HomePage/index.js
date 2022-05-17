import React from 'react';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../componentes/Header';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Header>Seu novo encurtador de URL. :)</Header>
                <FontAwesomeIcon icon="fa-solid fa-square-check" /> Pitu
            </Container>
        )
    }
}

export default HomePage;