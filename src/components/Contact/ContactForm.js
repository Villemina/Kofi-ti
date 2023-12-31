import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';
import './contact.scss'


const ContactForm = () => {
    const form = useRef()
    const address ="ul. Warszawska 15, Radzyń Podlaski, Polska";
    const number= "577 803 851";

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_81wgy5o', 'template_0z3s0by', form.current, 'pKLweVQYPbq0G3l7C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section>
            <div className="contact">
                <div className="contact__container">
                    <h2 className="container__text-header">Skontaktuj się z nami...</h2>
                    <div className="contact__box">
                    <form ref={form} onSubmit={sendEmail} className="form__control-card">
                        <input type="text" placeholder="Imię" name='user_name' required/>
                        <input type="text" placeholder="Nazwisko" name='user_surname' required/>
                        <input type="email" placeholder="Email" name='user_email' required/>
                        <input type="tel" placeholder="Telefon" name='user_tel' required/>
                        <textarea name="message" cols="45" rows="6"></textarea>
                        <button type='submit' className="form__btn-primary">Wyślij wiadomość</button>
                    </form>
                    <div className="contact__otherinfo">
                        <div className="contact__info">
                            <h3 className="contact__info-header">Możemy się również zobaczyć... </h3>
                        </div>
                        <div className="contact__info-content">
                            <FontAwesomeIcon icon={faLocationDot} /> {address}
                        </div>
                        <div className="contact__info-content">
                            <FontAwesomeIcon icon={faPhone} /> {number}
                        </div>
                        <div className="contact__info-content">
                            <div className="social__media-icons">
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
                        </div>
                        <div className="contact__map">
                            <iframe
                                title="Lokalizacja na mapie"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.0756096672893!2d22.615679469634603!3d51.78235839824234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472219374c6475a3%3A0xf46fd30c054b40d0!2sKofi%20%26%20Ti%20-%20Coffee%20and%20Tea%20Art!5e0!3m2!1sen!2spl!4v1688076408967!5m2!1sen!2spl"
                                width="300" height="250" style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;