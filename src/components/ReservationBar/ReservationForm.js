import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './rezerwacje.scss'
const ReservationForm = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_81wgy5o', 'template_byr05as', form.current, 'pKLweVQYPbq0G3l7C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section>
            <div className="container__reservation">
                <h2 className="reservation__text-center">Rezerwacja</h2>
                <form ref={form}  onSubmit={sendEmail} className="reservation__form-control">
                    <input type="text" placeholder="Imię" name='user_name' required/>
                    <input type="text" placeholder="Nazwisko" name='user_surname' required/>
                    <input type="email" placeholder="Email" name='user_email' required/>
                    <input type="tel" placeholder="Telefon" name='user_tel' required/>
                    <input type="date" placeholder="Data" name='user_date' required/>
                    <input type="text" placeholder="Ilość Osób" name='user_number'/>
                    <textarea name="message" placeholder="Dodatkowe Uwagi" cols="40" rows="5"></textarea>
                    <button type='submit' className="reservation__btn-primary">Zarezerwuj Stolik</button>
                </form>
            </div>
        </section>
    );
};


export default ReservationForm;