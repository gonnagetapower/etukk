
import React from "react";

import closeIcon from "../../assets/icons/close_icon.png";
import auctionLogo from "../../assets/auction_logo.png";

import auctionMainLogo from "../../assets/auction_logo_main.png";

import "./AuthLayout.css";

const AuthLayout = ({authContent}) => {
  return (
    <>
      <div className="authlayout-close">
        <img src={closeIcon} alt="authlayout-close_icon" />
      </div>

      <div className="authlayout-wrapper">
        <div className="authlayout-logo__main">
          <img src={auctionMainLogo} alt="authlayout-logo__main" />
        </div>
        <div className="authlayout-content__block">
          <div className="authlayout-content">
            <div className="authlayout-logo">
              <img src={auctionLogo} alt="authlayout-logo" />
            </div>
            {authContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
