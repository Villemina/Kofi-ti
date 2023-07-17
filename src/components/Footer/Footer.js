import React, {useState} from 'react';
import './footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';
import Modal from "react-modal";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const customStyles = {
        overlay: {
            zIndex: 9999,
        },
        content: {
            padding: "2rem",
            inset: "20rem 10rem",
        },
    };

    return (
        <footer className="container__footer">
            <div className="container__footer-social">
                <a href="https://www.facebook.com/kawiarnia.kofiti/?locale=pl_PL" target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon" size="2x" id="facebook"/>
                </a>
                <a href="https://www.instagram.com/kawiarnia_kofiti/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon" size="2x" id="instagram"/>
                </a>
                <a href="https://www.tiktok.com/@kofiti" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="icon" size="2x" id="tiktok"/>
                </a>
            </div>
            <ul className="container__footer-list">
                <li>
                    <button onClick={togglePopup}>O nas</button>
                    {isOpen && (
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={togglePopup}
                            style={customStyles}
                        >
                            <div className="popup">
                                <div className="popup-content">
                                    <h2>"Kofi&Ti" Kawiarnia i Herbaciarnia Artystyczna</h2>
                                    <p>
                                        Miejsce, w którym czas płynie wolniej,
                                        napoje smakują lepiej,
                                        a muzyka brzmi cieplej.
                                        Tak zwane miejsce z klimatem na długie i krótkie spotkania.
                                    </p>
                                    <button onClick={togglePopup}>zamknij</button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </li>
                <li>
                    <button onClick={togglePopup}>Kontakt</button>
                    {isOpen && (
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={togglePopup}
                            style={customStyles}
                        >
                            <div className="popup">
                                <div className="popup-content">
                                    <h2>"Kofi&Ti" Kawiarnia i Herbaciarnia Artystyczna</h2>
                                    <p>
                                        Znaleść nas mozesz na ulicy Warszawska 15, Radzyń Podlaski, Polska
                                        Lub zadwonić na 577 803 851
                                    </p>
                                    <button onClick={togglePopup}>zamknij</button>
                                </div>
                            </div>
                        </Modal>
                    )}</li>
                <li>
                    <button onClick={togglePopup}>Polityka prywatności</button>
                    {isOpen && (
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={togglePopup}
                            style={customStyles}
                        >
                            <div className="popup">
                                <div className="popup-content">
                                    <h2>Niniejsza polityka prywatności określa, w jaki sposób nasza kawiarnia gromadzi,
                                        wykorzystuje, ujawnia i chroni wszelkie informacje, które otrzymujemy od
                                        użytkowników naszej strony internetowej.</h2>
                                    <p>Gromadzenie informacji
                                        1.1. Dane osobowe: Podczas korzystania z naszej strony internetowej, możemy
                                        prosić o podanie niektórych danych osobowych, takich jak imię, nazwisko, adres
                                        e-mail, numer telefonu itp., podczas składania zamówienia lub rejestracji do
                                        naszego newslettera. Te informacje są dobrowolne, a ich podanie jest wymagane
                                        jedynie w celu świadczenia określonych usług lub przetwarzania zamówienia.

                                        1.2. Dane techniczne: Podczas odwiedzania strony internetowej, automatycznie
                                        gromadzimy pewne dane techniczne, takie jak adres IP, przeglądarka internetowa,
                                        system operacyjny, informacje o urządzeniu, czas dostępu itp. Te dane są używane
                                        do analizy statystyk, monitorowania działania strony oraz poprawy jej
                                        funkcjonalności i użytkowalności.

                                    </p>
                                    <button onClick={togglePopup}>zamknij</button>
                                </div>
                            </div>
                        </Modal>
                    )}</li>
            </ul>
            <div className="container__footer-copyright">
                © Kofi&Ti
            </div>
        </footer>
    );
};

export default Footer;
