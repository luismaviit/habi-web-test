import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "./style/ButtonResume.style";
import Modal from "../modal/Modal"
import ContentResumen from "../contentResumen/ContentResumen";
function ButtonResume() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={()=>setOpen(true)}>
        <DescriptionIcon />
        Resumen
      </Button>
      <Modal isOpen={open} onClose={handleClose}>
        <ContentResumen/>
      </Modal>
    </>
  );
}

export default ButtonResume;
