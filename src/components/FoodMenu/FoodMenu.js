import React, { useEffect, useState } from "react";
import './foodMenu.scss';

const ApiUrl = "http://localhost:3001/menu";

const FoodMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        menuGrid();
    }, []);

    const menuGrid = async () => {
        const response = await fetch(ApiUrl);
        const jsonData = await response.json();
        setMenu(jsonData);
    };

    return (
        <div className="container">
            <h2>Menu Naszej Kawiarni</h2>
            <div className="flex">
            {menu.map((values) => (
                <div className="container__box" key={values.id}>
                    <div className="container__box-content">
                        <div className="container__box-text">
                            <h3>{values.name}</h3>
                            <h4>{values.category}</h4>
                            <p>{values.description}</p>
                        </div>
                        <p className="container__box-text">{values.price}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default FoodMenu;
