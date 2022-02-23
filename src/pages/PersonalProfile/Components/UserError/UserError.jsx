import React from "react";
import userErrorIcon from "../../../../assets/icons/personal_profile/user_error_icon.png";
import "./UserError.css";
const UserError = () => {
  return (
    <div className="user-error__wrapper">
      <div className="user-error__logo">
        <img src={userErrorIcon} alt="user_error_icon" />
      </div>
      <div className="user-error__title">
        Уважаемый пользователь, на вас поступила жалоба. На следующие 3 покупки
        или продажи будет удержана дополнительная комиссия в размере 10%
      </div>
    </div>
  );
};

export default UserError;
