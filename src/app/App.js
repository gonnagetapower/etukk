
import React from "react";
import { BrowserRouter, Route, Routes , } from "react-router-dom";
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
import Lots from "../pages/Lots/Lots";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* app-wrapper none width for auth,reg,forgot,error404 */}
        <Routes>
        <Route path="/login" element={<Authorization />} />
        </Routes>
        <Routes>
        </Routes>
          {/* <Menu /> */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/currentUser" element={<UserProfile />} />
            <Route path="/user/profile" element={<PersonalProfile />} />
            <Route
            path="/registration/choice"
            element={<RegistrationChoiceStatus />}
          />
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
            {/* <Route path="*" element={<Missing />} /> */}
            <Route
              path="/user/password/change"
              element={<ChangePasswordForm />}
            />
            {/* new */}

            <Route path="/auction/lot/create" element={<PutupAuctionLot />} />
            <Route path="/auction/lot/create/preview" element={<Preview />} />
            <Route path="/lot" element={<Lots />} />
          </Routes>
          {/* <CookiesPopup /> */}
      </BrowserRouter>
    </>
  );
};

export default App;

// https://front-vo-it.vercel.app/forgot/form
// https://front-vo-it.vercel.app/forgot/sended
// https://front-vo-it.vercel.app/forgot/change
// https://front-vo-it.vercel.app/login
// https://front-vo-it.vercel.app/currentUser
// https://front-vo-it.vercel.app/user/profile
// https://front-vo-it.vercel.app/registration/choice
// https://front-vo-it.vercel.app/registration/juridical
// https://front-vo-it.vercel.app/registration/confirmPhone
// https://front-vo-it.vercel.app/registration/confirmEmail
// https://front-vo-it.vercel.app/registration/congratulations
// https://front-vo-it.vercel.app/user/password/change
// https://front-vo-it.vercel.app/auction/lot/create
// https://front-vo-it.vercel.app/auction/lot/create/preview
// https://front-vo-it.vercel.app/lot
