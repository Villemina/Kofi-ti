import React from 'react';
import Footer from "../../components/Footer/Footer";
import EventsGallery from "../../components/EventsGallery/EventsGallery";
import MenuEvents from "../../components/MenuEvents/MenuEvents";
import EventsCard from "../../components/EventsCards/EventsCard";



const Events = () => {
    return (
        <div>
            <MenuEvents/>
            <EventsGallery/>
            <EventsCard/>
            <Footer/>
        </div>
    );
};

export default Events;