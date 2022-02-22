import React from "react";
import { CustomButton, Menu, Footer } from "../../components";
import {WiningBets,OutbidBets} from "./bet-components";
import arrowBack from "../../assets/icons/personal_profile/arrow_back.png";

import Slider from "react-slick";

import {
  PersonalInformation,
  User,
  ChangePassword,
  Services,
  Leave,
  Settings,
  UserError,
} from "./Components";

import "./PersonalProfile.css";
const PersonalProfile = () => {
  const [countSlides, setCountSlides] = React.useState(5);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleSetTab = (index) => {
    switch (index) {
      case 0:
        setCountSlides(5);
        break;
      case 1:
        setCountSlides(2);
        break;
      default:
        setCountSlides(5);
        break;
    }
    setSelectedNav(0);
    setSelectedTab(index);
  };

  const [selectedNav, setSelectedNav] = React.useState(0);
  const handleSetNav = (index) => {
    setSelectedNav(index);
  };

  const tabs = [
    { id: 0, title: "Личная информация" },
    { id: 1, title: "Ставки" },
    { id: 2, title: "Продажи" },
    { id: 3, title: "Покупки" },
  ];

  const slickSetting = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: countSlides,
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    // mobile breackpoints
  };

  function getNavs(index) {
    switch (index) {
      case 0:
        return [
          { id: 0, title: "Обо мне" },
          { id: 1, title: "Смена пароля" },
          { id: 2, title: "Сервисы и услуги" },
          { id: 3, title: "Настройки" },
          { id: 4, title: "Выход" },
        ];
      case 1:
        return [
          { id: 0, title: "Побеждающие ставки (12)" },
          { id: 1, title: "Перебитые ставки (1)" },
        ];
      default:
        return [
          { id: 0, title: "Обо мне" },
          { id: 1, title: "Смена пароля" },
          { id: 2, title: "Сервисы и услуги" },
          { id: 3, title: "Настройки" },
          { id: 4, title: "Выход" },
        ];
    }
  }

  function getNavContent(indexTab, indexNav) {
    switch (indexTab) {
      //Личная инмформация
      case 0:
        switch (indexNav) {
          //Обо мне
          case 0:
            return <PersonalInformation />;
          //Смена пароля
          case 1:
            return <ChangePassword />;
          //Сервисы и услуги
          case 2:
            return <Services />;
          //Настройки
          case 3:
            return <Settings />;
          //Выход
          case 4:
            return <Leave />;
          default:
            break;
        }
        break;

      //Ставки
      case 1:
        switch(indexNav){
          //Побеждающие ставки
          case 0:
            return <WiningBets />;
          //Перебитые ставки
          case 1:
            return <OutbidBets />;
        }
        break;

      default:
        break;
    }
  }
  const navs = getNavs(selectedTab);

  return (
    <>
      <Menu />
      <div className="pprofile-wrapper">
        <div className="pprofile-top">
          <div className="pprofile-top__title">Личный профиль</div>
          <div className="pprofile-top__back">
            <img src={arrowBack} alt="arrow_back" />
            <span> Назад</span>
          </div>
        </div>
        <div
          className={
            selectedTab === 0 ? "pprofile-content" : "pprofile-content__full"
          }
        >
          <div className="pprofile-leftside">
            <div className="pprofile-tabs">
              {tabs &&
                tabs.map((tab, index) => (
                  <div
                    onClick={() => handleSetTab(index)}
                    key={`${tab.id}:${index}`}
                    className={`pprofile-tabs__tab ${
                      selectedTab === index && "pprofile-tabs__tab-active"
                    }`}
                  >
                    <CustomButton>{tab.title}</CustomButton>
                  </div>
                ))}
            </div>
            <div className="pprofile-navs">
              <Slider {...slickSetting}>
                {navs &&
                  navs.map((nav, index) => (
                    <div
                      onClick={() => handleSetNav(index)}
                      key={`${nav.id}:${index}`}
                      className={`pprofile-navs__nav ${
                        selectedNav === index && "pprofile-navs__nav-active"
                      }`}
                    >
                      {nav.title}
                    </div>
                  ))}
              </Slider>
            </div>
            {selectedTab === 0 && <User />}
            {true && selectedTab === 0 && <UserError />}
            <div className={selectedTab !== 0 && "pprofile-nav__content-full"}>
              {getNavContent(selectedTab, selectedNav)}
            </div>
          </div>
          {selectedTab === 0 && (
            <div className="pprofile-rightside">
              <div className="pprofile-rectangle"></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalProfile;