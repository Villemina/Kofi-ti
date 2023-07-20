import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import MenuWrapper from "../../components/MenuWrapper/MenuWrapper";
import FoodMenu from "../../components/FoodMenu/FoodMenu";

const CaffeMenu = () => {
    return (
        <div>
            <Menu/>
            <MenuWrapper/>
            <FoodMenu/>
            <Footer/>
        </div>
    );
};

export default CaffeMenu;