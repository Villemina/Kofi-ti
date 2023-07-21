import React from 'react';
import {Container, Card, CardGroup} from 'react-bootstrap';
import FloraImage from './images/flora.jpg'
import WalentynkiImage from './images/walentynki.jpg'
import JesienImage from './images/jesien.jpg'
import DegustacjaImage from './images/degustacja.jpg'


function EventsCard() {


    return (
        <Container style={{backgroundColor: 'palegoldenrod', padding: '1rem',}} fluid>
            <CardGroup className="mb-5">
                <Card className="text-light mx-2 bg-success">
                    <Card.Img variant="top" src={FloraImage} alt="zaproszenie na warsztaty florystyczne"/>
                    <Card.Body>
                        <Card.Title>Warsztaty Florystyczne</Card.Title>
                        <Card.Text>
                            Tutaj odkryjesz tajniki tworzenia pięknych kompozycji kwiatowych. Poznaj nowe techniki,
                            czerp
                            inspirację i rozwijaj swoją pasję w przyjaznej atmosferze. Dołącz do naszej florystycznej
                            społeczności i odkryj magię kwiatów razem z nami!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-light">...kreatywność, kwiaty, inspiracja!</small>
                    </Card.Footer>
                </Card>
                <Card className="text-light mx-2 bg-success">
                    <Card.Img variant="top" src={WalentynkiImage} alt="zaproszenie na event walentynkowy"/>
                    <Card.Body>
                        <Card.Title>Eventy Dla Par i Singli</Card.Title>
                        <Card.Text>
                            Zapraszamy na romantyczne Warsztaty Walentynkowe! Odkryj sztukę tworzenia bukietów,
                            dekoracji i prezentów, aby wyrazić miłość. Poznaj tajniki florystyki i stwórz niezapomniane
                            wspomnienia wraz z nami. Dołącz do nas i ciesz się twórczym dniem pełnym serca i kwiatów!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-light">Lub znajdź nową miłość :)</small>
                    </Card.Footer>
                </Card>
                <Card className="text-light mx-2 bg-success">
                    <Card.Img variant="top" src={DegustacjaImage} alt="zaproszenie na degustacje serów i win"/>
                    <Card.Body>
                        <Card.Title>Warsztaty Ser i Wino!</Card.Title>
                        <Card.Text>
                            Odkryj harmonię smaków, poznaj tajniki dobierania serów i win. Zanurz się w zmysłowej
                            podróży kulinarnej, poznawaj nowe smaki i doświadczaj wyjątkowych połączeń. Dołącz i
                            delektuj się niezwykłą ucztą dla podniebienia!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-light">Degustacja sponsorowana...</small>
                    </Card.Footer>
                </Card>
                <Card className="text-light mx-2 bg-success">
                    <Card.Img variant="top" src={JesienImage} alt="zaproszenie na warsztaty Kosmetyczne"/>
                    <Card.Body>
                        <Card.Title>Eventy Tematyczne</Card.Title>
                        <Card.Text>
                            Zapraszamy na inspirujące Warsztaty Kosmetyków Wegańskich! Odkryj naturalne składniki, ucz
                            się tworzenia własnych produktów i dbaj o swoje ciało w eko-stylu. Dołącz i ciesz się
                            pięknem bez kompromisów. Razem twórzmy świadome i przyjazne dla zwierząt kosmetyki!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-light">Zadbaj o siebie z nami.</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default EventsCard;