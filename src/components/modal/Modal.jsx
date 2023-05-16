import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from '@mui/material/IconButton';
import {
  ModalNavbar,
  CloseButton,
  ModalBackground,
  ModalContent,
} from "./style/Modal.style";
function Modal  ({ isOpen, onClose, children }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
    } else {
      setTimeout(() => {
        setRender(false);
      }, 300);
    }
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      setRender(false);
    }
  };

  if (!render && !isOpen) return null;

  return (
    <ModalBackground
      render={isOpen}
      onClick={onClose}
      onAnimationEnd={onAnimationEnd}
    >
      <ModalContent render={isOpen} onClick={(e) => e.stopPropagation()}>
        <ModalNavbar>
          <IconButton
            color="inherit"
            onClick={onClose}
            sx={{
              display: "flex",
              position: "absolute",
            }}
            edge="end"
          >
           
            <CloseIcon />
          </IconButton>
          Resumen
        </ModalNavbar>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
