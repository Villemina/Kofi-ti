import React from 'react';
import Footer from "../../components/Footer/Footer";
import EventsGallery from "../../components/EventsGallery/EventsGallery";
import Menu from "../../components/Menu/Menu";
import EventsCard from "../../components/EventsCards/EventsCard";



const Events = () => {
    return (
        <div>
            <Menu/>
            <EventsGallery/>
            <EventsCard/>
            <Footer/>
        </div>
    );
};

export default Events;