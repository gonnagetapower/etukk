/** @format */

import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import closeIcon from "../../assets/icons/close_icon.png";

import { CustomButton } from "..";
import "./ModalConfirm.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  borderRadius: "8px",
  bgcolor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: 10,
};

const ModalConfirm = ({ buttonTitle, modalTitle }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickConfirm = () => {
    setOpenModal(false);
    //functions
  };
  return (
    <div>
      <CustomButton onClick={handleOpenModal}>{buttonTitle}</CustomButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
         
            <div className="modalconfirm-title">{modalTitle}</div>
            <div className="modalconfirm-tools">
              
              <CustomButton onClick={handleClickConfirm}>Ок</CustomButton>
            </div>
            <div onClick={handleCloseModal} className="modalconfirm-close">
                <img src={closeIcon} alt="modal_close_icon" />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalConfirm;
