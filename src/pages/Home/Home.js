import React from 'react';
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import AboutSection from "../../components/AboutSection/AboutSection";
import OfferSection from "../../components/Offer/Offer";

const Home = () => {
    return (
<div>
    <Menu/>
    <Slider/>
    <OfferSection/>
    <OpeningTimes/>
    <AboutSection/>
    <Footer/>
</div>
    );
};

export default Home;