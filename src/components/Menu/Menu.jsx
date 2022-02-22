import React from "react";
import auctionLogo from "../../assets/auction_logo.png";
import favoritesUserIcon from "../../assets/icons/menu/favorites_user_icon.png";
import notificationUserIcon from "../../assets/icons/menu/notification_user_icon.png";
import defaultUserIcon from "../../assets/icons/menu/default_user_icon.png";
import arrowUserIcon from "../../assets/icons/menu/arrow_user_icon.png";
import menuBurgerIcon from "../../assets/icons/menu/menu_burger_icon.png";
import menuBurgerActive from "../../assets/icons/menu/menu_burger_icon_active.png";

import { CustomButton } from "../";
import "./Menu.css";
const Menu = () => {
  const login = true;
  const [activeBurgerMenu, setActiveBurgerMenu] = React.useState(false);

  const menuNavs = [
    { id: 0, title: "Авто" },
    { id: 1, title: "Мебель" },
    { id: 2, title: "Личные вещи" },
    { id: 3, title: "Еще" },
  ];
  const burgerNavs = [
    { id: 0, title: "Избранное", notifications: 0 },
    { id: 1, title: "Выставить лот", notifications: 0 },
    { id: 2, title: "Уведомления", notifications: 0 },
    { id: 3, title: "Профиль", notifications: 0 },
    { id: 4, title: "Техподдержка", notifications: 1 },
    { id: 5, title: "О нас", notifications: 0 },
  ];

  return (
    <div className="menu-wrapper">
      <div className="menu-row__leftside">
        <div className="menu-logo">
          <img src={auctionLogo} alt="menu_logo" />
        </div>
        <div className="menu-navs">
          {menuNavs &&
            menuNavs.map((nav, index) => (
              <div key={`${nav.id}:${index}`} className="menu-navs__item">
                {nav.title}
              </div>
            ))}
        </div>
      </div>
      <div className="menu-row__rightside">
        <div className="menu-button">
          {login ? (
            <CustomButton outlined>Выставить лот</CustomButton>
          ) : (
            <CustomButton outlined>Авторизоваться</CustomButton>
          )}
        </div>
        {login && (
          <div className="menu-user">
            {/* <div className="menu-burger__menu">
              <div className="burger-menu__navs">
                {burgerNavs &&
                  burgerNavs.map((nav, index) => (
                    <div
                      key={`${nav.id}:${index}`}
                      className="burger-menu__navs-item"
                    >
                      {nav.title}{" "}
                      {nav.notifications > 0 && (
                        <span>{nav.notifications}</span>
                      )}
                    </div>
                  ))}
              </div>
              <div className="burger-menu__bottom">
                <span>+7 (900) 999-99-99</span>
                <span>Etukk@mail.ru</span>
              </div>
            </div> */}
            <div className="menu-user__icons">
              <img src={favoritesUserIcon} alt="menu-user_icon" />
              <img src={notificationUserIcon} alt="notification-user_icon" />
            </div>
            <div className={activeBurgerMenu ? "menu-user__user menu-user__user-active" : "menu-user__user"}>
              <div className="menu-user__user-image">
                <img src={defaultUserIcon} alt="menu_user_icon" />
              </div>
              <div className="menu-user__user-name">Игорь</div>
              <div className="menu-user__user-arrow">
                <img src={arrowUserIcon} alt="menu_arrow_icon" />
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => setActiveBurgerMenu(!activeBurgerMenu)}
          className="menu-button__burger"
        >
          {!activeBurgerMenu ? (
            <img src={menuBurgerIcon} alt="menu_burger_icon" />
          ) : (
            <img src={menuBurgerActive} alt="menu_burger_icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
