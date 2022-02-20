
import React from "react";
import { Link } from "react-router-dom";

// import auctionLogo from "../../assets/auction_logo.png";
// import auctionMainLogo from "../../assets/auction_logo_main.png";
// import appleIcon from "../../assets/icons/media/apple_icon.png";

// import googleIcon from "../../assets/icons/media/go_icon.png";

// import yandexIcon from "../../assets/icons/media/yandex_icon.png";
// import closeIcon from "../../assets/icons/close_icon.png"


import { CustomButton } from "../../components";


import "./Authorization.css";

const Authorization = () => {

    // const mediaItems = [

    //     { id: 0, icon: yandexIcon, title: "yandex" },
    //     { id: 1, icon: googleIcon, title: "google" },
    //     { id: 2, icon: appleIcon, title: "apple" },


    // ]



    return (
        <>
            {/* <div className="authorization-close">
                <img src={closeIcon} alt="authorization-close_icon" />
            </div>
            <div className="authorization-wrapper">
                <div className="authorization-logo__main">
                    <img src={auctionMainLogo} alt="authorization-logo__main" />
                </div>
                <div className="authorization-content__block">
                    <div className="authorization-content">
                        <div className="authorization-logo">
                            <img src={auctionLogo} alt="authorization-logo" />
                        </div>
                        <div className="authorization-title">Вход</div>
                        <div className="authorization-via">
                            <div className="authorization-via__title">Войти через</div>
                            <div className="authorization-via__social">
                                {mediaItems && mediaItems.map((item, index) =>
                                    <img src={item.icon} alt={`media_icon_${item.title}`} key={`${item.id}:${index}`} />
                                )}
                            </div>
                        </div>
                        <div className="authorization-form">
                            <input type="text" placeholder="E-mail или номер телефона" />
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="authorization-forgot">
                            <Link to="/forgot/form">Забыли пароль?</Link>
                        </div>
                        <div className="authorization-submit">
                            <CustomButton disabled={true}>
                                Войти
                            </CustomButton>
                        </div>
                        <div className="authorization-toreg">
                            <Link to="/registration/choice">Регистрация</Link>

                        </div>

                    </div>
                </div>

            </div> */}
        </>
    );
};

export default Authorization;
