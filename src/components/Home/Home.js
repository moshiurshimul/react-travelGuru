import React from 'react';
import { Card, CardDeck, Container, Row } from 'react-bootstrap';
import './Home.css';
import locationimage1 from '../../Image/Sajek.png';
import locationimage2 from '../../Image/Sreemongol.png';
import locationimage3 from '../../Image/sundorbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div className="home-page">
            <Container>
                <Row>
                <CardDeck className="home-card">
                <Card className="text-white">
                    <Card.Img src={locationimage1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Sajak</Card.Title>
                        <Card.Text>
                            Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district.
                        </Card.Text>
                        <button className="book-now-btn">Book Now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white">
                    <Card.Img src={locationimage2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Sreemangal</Card.Title>
                        <Card.Text>
                            It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.
                        </Card.Text>
                        <button className="book-now-btn">Book Now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white">
                    <Card.Img src={locationimage3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Sundorbon</Card.Title>
                        <Card.Text>
                            The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.
                        </Card.Text>
                        <button className="book-now-btn">Book Now <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
                </Row>
            </Container>
        </div>
    );
};

export default Home;