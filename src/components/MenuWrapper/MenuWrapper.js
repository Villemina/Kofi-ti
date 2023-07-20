import React from 'react';
import CofeImage from'./images/menu-coffee.jpg'
import './menu-wrapper.scss'

const MenuWrapper = () => {
    return (
        <div className="menu__wrapper">
            <img src={CofeImage} alt="Coffee place background"/>
        </div>
    );
};

export default MenuWrapper;