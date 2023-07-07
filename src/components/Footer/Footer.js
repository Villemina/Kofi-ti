import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="container__footer">
            <div className="container__footer-social">
                <a href="https://www.facebook.com/kawiarnia.kofiti/?locale=pl_PL" target="Kofiti">
                    <FontAwesomeIcon icon={faFacebook} className="icon" size="2x" id="facebook" />
                </a>
                <a href="https://www.instagram.com/kawiarnia_kofiti/?hl=en" target="Kofiti">
                    <FontAwesomeIcon icon={faInstagram} className="icon" size="2x" id="instagram" />
                </a>
                <a href="https://www.tiktok.com/@kofiti" target="Kofiti">
                    <FontAwesomeIcon icon={faTiktok} className="icon" size="2x" id="tiktok" />
                </a>
            </div>
            <ul className="container__footer-list">
                <li><a href="#">O nas</a></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Polityka Prywatności</a></li>
            </ul>
            <div className="container__footer-copyright">© Kofi&Ti</div>
        </footer>
    );
};

export default Footer;
