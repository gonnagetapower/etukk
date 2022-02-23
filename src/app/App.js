
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import {
  Authorization,
  Missing,
  PersonalProfile,
  PutupAuctionLot,
  UserProfile,
  MainPage
} from "../pages";
import {
  RegistrationChoiceStatus,
  RegistrationConfirmEmail,
  RegistrationConfirmPhone,
  RegistrationCongratulations,
  RegistrationIndividualForm,
  RegistrationJuridicalForm,
} from "../pages/Registration";

import { ForgotChange, ForgotForm, ForgotSended } from "../pages/Forgot";
import {
  CookiesPopup,
  Footer,
  Menu,
  BetCard,
  ModalApplySorting,
} from "../components";
import "./App.css";
import ChangePasswordForm from "../pages/PersonalProfile/Components/ChangePassword/ChangePasswordForm/ChangePasswordForm";
import { Preview } from "../pages/PutupAuctionLot/steps";


const App = () => {
  return (
    <>
    <BrowserRouter>
      {/* app-wrapper none width for auth,reg,forgot,error404 */}

      <div className="app-wrapper">
        {/* <Menu /> */}
        <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/currentUser" element={<UserProfile />} />
          <Route path="/login" element={<Authorization />} />
          <Route
            path="/registration/choice"
            element={<RegistrationChoiceStatus />}
          />
          <Route path="/user/profile" element={<PersonalProfile />} />
          <Route
            path="/registration/juridical"
            element={<RegistrationJuridicalForm />}
          />
          <Route
            path="/registration/individual"
            element={<RegistrationIndividualForm />}
          />
          <Route
            path="/registration/confirmPhone"
            element={<RegistrationConfirmPhone />}
          />
          <Route
            path="/registration/confirmEmail"
            element={<RegistrationConfirmEmail />}
          />
          <Route
            path="/registration/congratulations"
            element={<RegistrationCongratulations />}
          />

          <Route path="/forgot/form" element={<ForgotForm />} />
          <Route path="/forgot/sended" element={<ForgotSended />} />
          <Route path="/forgot/change" element={<ForgotChange />} />
          <Route path="*" element={<Missing />} />
          <Route
            path="/user/password/change"
            element={<ChangePasswordForm />}
          />
          {/* new */}

          <Route path="/auction/lot/create" element={<PutupAuctionLot />} />
          <Route path="/auction/lot/create/preview" element={<Preview />} />
        </Routes>
        {/* <CookiesPopup /> */}
      </div>
      </BrowserRouter>
    </>
  );
};

export default App;
