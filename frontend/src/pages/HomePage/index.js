import React from 'react';
import Header from '../../componentes/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap'
import { ContentContainer, Form } from './styles'
import ShortenerService from '../../services/shortenerServices';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { url } = this.state;

        this.setState({ isLoading: true, errorMessage: '' })

        if (!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe uma URL para encurtar.' })
        } else {
            try {
                const service = new ShortenerService();
                const result = await service.generate({ url });

                this.setState({ isLoading: false, code: result.code })
            } catch (error) {
                this.setState({ isLoading: false, errorMessage: 'Ocorreu um erro ao encurtar a URL' })
            }
        }
    }

    copyToClipboard = () =>{
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {

        const { isLoading, errorMessage, code } = this.state;

        return (
            <Container>
                <Header>Seu novo encurtador de URL. :)</Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <FormControl
                                placeholder='Digite a URL a ser encurtada'
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />

                            <Button variant="primary" type="submit">
                                Encurtar
                            </Button>

                        </InputGroup>

                        {isLoading ? (
                            <Spinner animation='border' />
                        ) : (
                            code && (
                                <>
                                    <InputGroup>
                                        <FormControl
                                            autoFocus={true}
                                            defaultValue={`https://pitu.tk/${code}`}
                                            ref={(input) => this.inputURL  = input}
                                        />

                                        <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>

                                    </InputGroup>

                                    <p>Para acompanhar as estatísticas, acesse https://pitu.tk/{code} </p>
                                </>
                            )
                        )}

                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}        
                    </Form>
                </ContentContainer>
            </Container>
        )
    }
}

export default HomePage;