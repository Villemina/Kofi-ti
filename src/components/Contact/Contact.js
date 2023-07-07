import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef()
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
            <div className="container">
                <h2 className="--text-center">Skontaktuj się z nami...</h2>
                <form ref={form}  onSubmit={sendEmail} className="--form-control--card">
                    <input type="text" placeholder="Imię" name='user_name' required/>
                    <input type="text" placeholder="Nazwisko" name='user_surname' required/>
                    <input type="email" placeholder="Email" name='user_email' required/>
                    <input type="tel" placeholder="Telefon" name='user_tel' required/>
                    <textarea name="message"  cols="30" rows="6"></textarea>
                    <button type='submit' className="--btn --btn-primary">Wyślij wiadomość</button>
                </form>
                <div className="contact__otherinfo">
                    <div className="contact__info">
                        <h3 className="contact__info-header">Możemy się również zobaczyć... </h3>
                    </div>
                    <div className="contact__info-content">
                        <p> ul. Warszawska 15, Radzyń Podlaski, Polska</p>
                    </div>
                    <div className="contact__info-content">
                        <i className="fa fa-phone"> 577 803 851</i>
                    </div>
                    <div className="contact__info-content">
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/kawiarnia.kofiti/?locale=pl_PL" target="Kofiti">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/kawiarnia_kofiti/?hl=en" target="Kofiti">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="https://www.tiktok.com/@kofiti" target="Kofiti">
                                <i className="fab fa-tiktok fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="contact__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.0756096672893!2d22.615679469634603!3d51.78235839824234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472219374c6475a3%3A0xf46fd30c054b40d0!2sKofi%20%26%20Ti%20-%20Coffee%20and%20Tea%20Art!5e0!3m2!1sen!2spl!4v1688076408967!5m2!1sen!2spl"
                                width="300" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;