
import React from "react";
import { CustomButton, Footer, Menu } from "../../components";
// import footerLogo from "../../assets/icons/putup_lot/footer_logo.png";
// import arrowBack from "../../assets/icons/personal_profile/arrow_back.png";
import {
  SubCategory,
  Category,
  LotName,
  Characteristics,
  Description,
  Media,
  Delivery,
  Preview,
} from "./steps";
import "./PutupAuctionLot.css";
import { useNavigate } from "react-router-dom";
const PutupAuctionLot = () => {
  // ALL REDUX
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const handleLastPoint = () => {
    setStep(0);
    navigate("/auction/lot/create/preview");
  };
  function getStep(step) {
    switch (step) {
      case 0:
        return <Category />;
      case 1:
        return <SubCategory />;
      case 2:
        return <LotName />;
      case 3:
        return <Characteristics />;
      case 4:
        return <Description />;
      case 5:
        return <Media />;
      case 6:
        return <Delivery />;
      case 7:
        return <Preview />;
      default:
        return <Category />;
    }
  }
  return (
    <>
      <Menu />
      <div className="putup-auction_lot-wrapper">
        <div className="putup-auction_lot-emptyblock"></div>
        <div className="putup-auction_lot-block">
          <div className="putup-auction_lot-title">Выставить лот</div>
          <div className="putup-auction_lot-steps">{getStep(step)}</div>
          <div className="putup-auction_next">
            {step !== 0 && step !== 7 ? (
              <div onClick={() => setStep(step - 1)} className="pal-next__back">
                {/* <img src={arrowBack} alt="arrow_back" /> */}
                <span> Назад</span>
              </div>
            ) : (
              <div> </div>
            )}

            <CustomButton
              onClick={step != 6 ? () => setStep(step + 1) : handleLastPoint()}
            >
              Далее
            </CustomButton>
          </div>
        </div>
        <div className="putup-auction_lot-footer">
          <div className="putup-auction_lot-footer-top">
            {/* <img src={footerLogo} alt="putup-lot_footer_icon" /> */}
            <span>
              Проблема цитат в интернете в том, что люди безоговорочно верят в
              их подлинность
            </span>
          </div>
          <div className="putup-auction_lot-footer-bottom">В.И. Ленин</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PutupAuctionLot;
