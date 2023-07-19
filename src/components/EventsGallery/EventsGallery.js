import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import AniaImage from './images/aniasama.jpg'
import FalochronImage from './images/falochron.jpg'
import NativeImage from './images/native.jpg'
import SumaImage from './images/suma pragnien.jpg'
import BojaImage from './images/bojarczuk.jpg'


const EventsGallery = () => {
    return (
        <Container style={{backgroundColor: 'palegoldenrod', padding: '1rem',}} fluid>

            <Row className="p-4 m">
                <Col>
                    <Image src={SumaImage} fluid rounded/>
                </Col>
                <Col className="text-center p-3 h4 " >Jeśli chcecie poczuć magię folk rocka, koniecznie musicie usłyszeć zespół Suma Pragnień.
                    Są laureatami ogólnopolskich festiwali piosenki autorskiej m. in. Bakcynalia i Przy Kominku.

                    Skład zespołu:
                    Ewelina Pisarska - śpiew,
                    Mirosław Mazur - gitara elektroakustyczna,
                    Michał Wójcik - cajon.
                    Ich występ to nie tylko muzyka, to prawdziwe emocje – autorskie piosenki, wypełnione akustycznym
                    drajwem, które zabiorą Was w niezapomnianą podróż!</Col>
            </Row>
            <Row>
                <Col className="text-center p-5 mt-5 h4 ">Przestrzenna, alternatywna poezja śpiewana z elementami bardzo swobodnego jazzu, bluesa, wpływami
                    muzyki klasycznej i filmowej zabrzmi w KOFI! Zespół Falochron wchodzi na rynek muzyczny prezentując
                    swoją twórczość na festiwalach i w szczególnych miejscach, które z delikatnością i sztuką są za pan
                    brat. Zespół w marcu 2022 po raz pierwszy zaprezentował słuchaczom swoją twórczość wygrywając
                    prestiżowy Ogólnopolski Festiwal Piosenki Turystycznej YAPA / Łódź. W ubiegłym roku Falochron był
                    też laureatem kilku innych ważnych festiwali z gatunku piosenki poetyckiej i poezji śpiewanej.</Col>
                <Col className= "h-50">
                    <Image src={FalochronImage} fluid rounded/>
                </Col>
            </Row>
            <Row className="px-4 my-5">
                <Col>
                    <Image src={AniaImage} fluid rounded/>
                </Col>
                <Col className="text-center p-3 h4 " >W swojej muzyce stawia na autentyczność i melodie prosto z tego pokoju, gdzie jest sama ze swoimi emocjami. Czuły, czasem metaliczny głos, który śpiewa do ucha, a czasem rozcina mrok i otwiera przestrzeń. Na swoim koncie ma 3 single: "Pestka", "Kołyszą" i "Krok po kroczku", zapowiadające album "Śnienie", który ukazał się 4 czerwca 2021 r. w formie CD.

                    - Ta płyta ma swój własny, subtelny blask, który jest odzwierciedleniem mojego blasku w oczach, kiedy mówię o muzyce. Bo na tej płycie błyszczę, iskrzę się. Ujawniam fakt, że noszę w sobie melodie i słowa. Mamy do siebie namiętność, odwzajemnioną namiętność i bliskość. To słychać w brzmieniu tej płyty - dodaje piosenkarka.

                    Od wydania debiutanckiego albumu Ania Sama aktywnie koncertuje w duecie z gitarzystą Jarkiem Jurkiewiczem oraz z całym składem.</Col>
            </Row>
            <Row className="px-4 my-5">
                <Col>
                    <Image src={NativeImage} fluid rounded/>
                </Col>
                <Col className="text-center p-5 mt-5 h4 ">Zespół Native Zapraszamy na koncert 🎼
                    "Kochamy brzmienie funku lat 70-tych, lecz nieobce są nam eksperymenty brzmieniowe i łączenie
                    gatunków"
                    Native to sześcioosobowy skład muzyków oscylujących wokół funku, soulu i jazzu. Kompozycje,
                    głównie instrumentalne, oparte są na solidnym groovie sekcji rytmicznej. Wplecione w całość
                    ciepłe dźwięki piana i gitary kontrastują z saksofonowymi solówkami. Funk? Soul? Jazz? Przekonaj się sam!!</Col>
            </Row>
            <Row className="px-5 my-5">
                <Col className="text-center p-5 mt-5 h4 ">W imieniu artysty i organizatora, kawiarni Kofi&Ti, zapraszamy na zamknięcie wystawy "Mono-zielnik" autorstwa Krzysztofa Bojarczuka. Finisaż odbędzie się w Kawiarni i Herbaciarni Artystycznej Kofi&Ti, w najbliższy piątek, 21.06.2019 po godz. 19.00.

                    Artysta jest dobrze znany w artystycznym światku naszego miasta ponieważ pochodzi z Radzynia Podlaskiego, ale dziś na stałe mieszka w Nowym Sączu. Krzysztof Bojarczuk zajmuje się rysunkiem i malarstwem. W swej twórczości odwołuje się do abstrakcji, rysunkowej symboliki, uniwersalnych znaczeń i motywów.</Col>

                <Col>
                    <Image src={BojaImage} fluid rounded/>
                </Col>
            </Row>

        </Container>
    );
};

export default EventsGallery;
