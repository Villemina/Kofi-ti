import React from 'react';
import icedCoffeeImage from './images/iced-coffee.png';
import drinksImage from './images/Drinks-14-500x500.jpg';
import snackImage from './images/przekąska.jpg';
import './offer.scss'

const OfferSection = () => {
    return (
        <section className="offer__section__container">
            <div className="offer__display-box">
                <img src={icedCoffeeImage} alt="mrożona kawa" className="offer-image" />
                <h3 className="offer__text-header">Kofi&ti Classic</h3>
                <p className="offer__text_-content">
                    Rozkoszuj się aromatem kawy i herbaty w naszej kawiarni. Uczucie popołudniowej ekstazy, smak esencji życia.
                    Złociste promienie słońca tańczą w filiżankach, rozpalając zmysły. Delikatność herbaty wznosi cię na chmurach,
                    podczas gdy kawa budzi twoje zmysły do życia. Wybierz swój ulubiony smak i pozwól się ponieść unikalnemu
                    doświadczeniu.
                </p>
                <button className="btn-secondary">
                    <a href="#menu" className="menu-nav">Zobacz naszą ofertę</a>
                </button>
            </div>
            <div className="offer__display-box">
                <img src={drinksImage} alt="zimne napoje" className="offer-image" />
                <h3 className="offer__text-header">Coś na ochłode...</h3>
                <p className="offer__text-content">
                    Odkryj rozkosz zimnych napojów i wykwintnych alkoholi w naszej kawiarni. Odświeżające koktajle i orzeźwiające
                    piwa rzemieślnicze. Zanurz się w soczystych smakach, które ukoią twoje podniebienie. Poczuj dreszczyk emocji w
                    chłodnych łykach, które ożywią twój nastrój. Dołącz do naszej niezapomnianej podróży smaków już dziś!
                </p>
                <button className="btn-secondary">
                    <a href="#menu" className="menu-nav">Zobacz naszą ofertę</a>
                </button>
            </div>
            <div className="offer__display-box">
                <img src={snackImage} alt="Blok czekoladowy z kawą" className="offer-image" />
                <h3 className="offer__text-header">Dla każdego smakosza.</h3>
                <p className="offer__text-content">
                    Rozpływaj się w rozkosznych przekąskach i wykwintnych ciastach w naszej kawiarni. Poczuj wybuch smaków na swoim
                    podniebieniu. Przebieraj w różnorodnych przekąskach, które podkreślą twoje kulinarne upodobania. Każdy kęs to
                    podróż do niebiańskiego raju smaków. Ciesz się aromatycznymi napojami i osiągnij harmonię smaków.
                </p>
                <button className="btn-secondary">
                    <a href="#menu" className="menu-nav">Zobacz naszą ofertę</a>
                </button>
            </div>
        </section>
    );
};

export default OfferSection;
