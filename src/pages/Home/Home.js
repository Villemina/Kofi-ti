import React from 'react';
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import AboutSection from "../../components/AboutSection/AboutSection";
import OfferSection from "../../components/Offer/Offer";

const Home = () => {
    return (
<div>
    <Slider/>
    <OfferSection/>
    <OpeningTimes/>
    <AboutSection/>
    <Footer/>
</div>
    );
};

export default Home;