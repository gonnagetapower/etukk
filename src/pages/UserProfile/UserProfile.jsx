/** @format */

import React from "react";
import { CustomButton, Menu, Footer } from "../../components";
import {Reviews,Lots,EndedLots} from "./components";

// import starIcon from "../../assets/icons/personal_profile/star_icon.png"
// import likeIcon from "../../assets/icons/personal_profile/like_icon.png"
// import dislikeIcon from "../../assets/icons/personal_profile/dislike_icon.png"
// import arrowBack from "../../assets/icons/personal_profile/arrow_back.png";
// import copyIcon from "../../assets/icons/user_profile/copy_icon.png";


import "./UserProfile.css";
const UserProfile = () => {
  const [selectedNav,setSelectedNav]=React.useState(0);
  const navItems=[
    {id:0,title:"Отзывы"},
    {id:1,title:"Размещенные лоты (1)"},
    {id:2,title:"Завершенные лоты (8)"}

  ]
  function getNavContent(index){
    switch (index) {
      //Отзывы
      case 0:
        return <Reviews />
        
        //Размещенные лоты 
      case 1:
        return <Lots />

      //Завершенные лоты
      case 2:
        return <EndedLots />
      default:
        return <Reviews />

    }
  }
  return (
    <>
      <Menu />
      <div className="user-profile__wrapper">
        <div className="user-profile__leftside">
          <div className="up-leftside__block">
          <div className="user-profile__top">
            <div className="user-profile__top-name">Игорь</div>
            <div className="user-profile__top-id">
              <span>id1234765</span>
              {/* <img src={copyIcon} alt="copy_icon" /> */}
            </div>
          </div>
          <div className="user-profile__registration-data">
            <span>Зарегестрирован 12.09.21</span>
            <span>Частное лицо / г. Москва</span>
          </div>
          <div className="user-profile__data">
            <div className="user-profile__data-image">
            </div>
            <div className="user-profile__data-rating">
              <div className="user-profile__data-rating__saler">
                <span>Рейтинг продавца</span>
                <div className="data-rating__saler">
                  {/* <img src={starIcon} alt="star_icon" /> */}
                  <span>5</span>
                </div>
              </div>
              <div className="user-profile__data-rating__buyer">
                <span>Рейтинг покупателя</span>
                <div className="data-rating__buyer">
                  {/* <img src={starIcon} alt="star_icon" /> */}
                  <span>5</span>
                </div>
              </div>
              <div className="user-profile__data-rating__revs">
                <span>Отзывы</span>
                <div className="data-rating__revs">
                  <div className="data-rating__revs-likes">
                    {/* <img src={likeIcon} alt="like_icon" /> */}
                    <span>5</span>
                  </div>
                  <div className="data-rating__revs-dislikes">
                    {/* <img src={dislikeIcon} alt="dislike_icon" /> */}
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div className="user-profile__data-rating__follow">
                <CustomButton>Подписаться</CustomButton>
              </div>
            </div>
          </div>
          <div  className="user-proflie__navs">
            {navItems && navItems.map((nav,index)=>
            <div onClick={()=>setSelectedNav(nav.id)} key={`${nav.id}:${index}`} className={selectedNav === nav.id ? "user-profile__navs-item user-profile__navs-item-active" : "user-profile__navs-item"}>
              {nav.title}
            </div>
            )}
          </div>
          <div className="user-profile__content">
            {getNavContent(selectedNav)}
          </div>
          </div>
        </div>
        <div className="user-profile__rightside">
          <div className="user-profile__rightside-back">
            {/* <img src={arrowBack} alt="arrow_back" /> */}
            <span> Назад</span>
          </div>
          <div className="user-profile__rightside-rectangle"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
