import React from "react";
import './about.scss';
import coffeeLogo from './images/coffee-logo.png';
import biletyImage from './images/bilety.jpg';
import lekcjeImage from './images/lekcje.jpg';
import koncertImage from './images/koncert.jpg';

const AboutSection = () => {
    return (
        <section className="about__container">
            <div className="about__text-section">
                <h2 className="about__text-header">O Nas</h2>
                <p className="about__text-content">
                    Istniejemy od 2011 roku i zdobyliśmy popularność wśród mieszkańców Radzynia Podlaskiego. Jesteśmy znani nie tylko
                    z doskonałej kawy i szerokiego wyboru piw rzemieślniczych, ale również z organizacji licznych koncertów, wystaw,
                    pokazów filmowych, spotkań autorskich, warsztatów i występów artystycznych. Lokal znajduje się w centrum miasta
                    przy ulicy Warszawskiej. Oferujemy salę barową, mniejsze pomieszczenie i dużą salę koncertową. Posiadamy także
                    przylegający ogródek. Nasza kawiarnia cieszy się popularnością zarówno wśród mieszkańców, jak i turystów,
                    serwując kawę, herbatę, napoje, przekąski i różnorodne dania.
                </p>
                <img src={coffeeLogo} alt="kawa logo" className="images__gallery" />
                <img src={koncertImage} alt="fotografie z koncertu" className="images__gallery" />

            </div>
            <div className="about__images">
                <img src={biletyImage} alt="zaproszenie na koncert" className="images__gallery" />
                <img src={lekcjeImage} alt="warsztaty jezykowe" className="images__gallery" />
            </div>
        </section>
    );
};

export default AboutSection;