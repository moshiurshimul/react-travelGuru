import React from 'react';
import { Card, CardDeck, Container, Row } from 'react-bootstrap';
import './Home.css';
import locationimage1 from '../../Image/Sajek.png';
import locationimage2 from '../../Image/Sreemongol.png';
import locationimage3 from '../../Image/sundorbon.png';


const Home = () => {
    return (
        <div className="home-page">
            <Container>
                <Row>
                <CardDeck className="home-card">
                <Card className="text-white">
                    <Card.Img src={locationimage1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white">
                    <Card.Img src={locationimage2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white">
                    <Card.Img src={locationimage3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
                </Row>
            </Container>
        </div>
    );
};

export default Home;