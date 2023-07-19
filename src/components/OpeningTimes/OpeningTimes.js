import React, { useState, useEffect } from 'react';
import './openingTimes.scss';
import clockImage from './images/clock.png';


const OpeningTimes = () => {
    const WallClock = () => {
        const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }, []);


        return (
            <div className="container__opening-times">
                <div className="clock">
                    <div className="clock-circle"></div>
                    <img src={clockImage} alt="zegar" className="clock-image" />
                    <div className="hour-hand" style={{ transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)` }}></div>
                    <div className="minute-hand" style={{ transform: `rotate(${currentTime.getMinutes() * 6}deg)` }}></div>
                    <div className="second-hand" style={{ transform: `rotate(${currentTime.getSeconds() * 6}deg)` }}></div>
                </div>
                <div className="opening__times-card">
                    <div className="opening__times-header">
                        <h2>Godziny Otwarcia</h2>
                    </div>
                    <div className="opening__times-content">
                        <ul className="opening__times-list">
                            <li className="opening-day">Poniedziałek: 12:00 - 20:00</li>
                            <li className="opening-day">Wtorek: 12:00 - 20:00</li>
                            <li className="opening-day">Środa: Nieczynne</li>
                            <li className="opening-day">Czwartek: 12:00 - 20:00</li>
                            <li className="opening-day">Piątek: 12:00 - 21:00</li>
                            <li className="opening-day">Sobota: 14:00 - 22:00</li>
                            <li className="opening-day">Niedziela: 14:00 - 20:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <WallClock />
        </div>
    );
};

export default OpeningTimes;
