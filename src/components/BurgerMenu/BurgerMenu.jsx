import React from "react";
import Burger from "../BurgerBtn/Burger";
import './BurgerMenu.css';
import favIcon from "./../../assets/icons/menu/2.svg";
import notificationIcon from "./../../assets/icons/menu/1.svg";
import defaultUser from "./../../assets/icons/menu/default_user_icon.png";
import menu_burger_icon_active from "./../../assets/icons/menu/menu_burger_icon_active.png";

const BurgerMenu = ({ header, burgerMenuItems, active, setActive }) => {
    debugger
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'}>
            <div onClick={() => setActive(false)} class="blur" />
            <div class="burger-menu__content">
                <div class="burger-menu__header">
                    <div><img src={favIcon} /></div>
                    <div><img src={notificationIcon} /></div>
                    <div><img src={defaultUser} /> </div>
                    <div onClick={() => setActive(!active)}><img  src={menu_burger_icon_active}/> </div>
                </div>
                <div class="burger-menu__list">
                    <ul>
                        {burgerMenuItems.map(item =>
                            <li>{item.title}</li>
                        )}
                    </ul>
                </div>
                <div class="burger-menu__footer">
                    <div>+7 (900) 999-99-99</div>
                    <div>Etukk@mail.ru</div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;