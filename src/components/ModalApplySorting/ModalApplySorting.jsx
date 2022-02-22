
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import closeIcon from "../../assets/icons/close_icon.png";

import { CustomButton } from "..";
import "./ModalApplySorting.css";

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

const ModalApplySorting = () => {
  const [openModal, setOpenModal] = React.useState(false);
   



  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <div className="modal-apply__wrapper">
              <div className="modal-apply__sorting-title">
                Применить сортировку
              </div>
              <div className="modal-apply__select">
               
              </div>
              <div className="modal-apply__sorting-submit">
                <CustomButton outlined>Применить</CustomButton>
              </div>
              <div
                onClick={handleCloseModal}
                className="modal-apply__sorting-close"
              >
                {/* <img src={closeIcon} alt="modal_close_icon" /> */}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalApplySorting;
