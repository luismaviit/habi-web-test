import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "./style/ButtonResume.style";
import Modal from "../modal/Modal"
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
        <h1 style={{ color: "black" }}>Contenido del Modal</h1>
        <p style={{ color: "black" }}>
          Aquí va el contenido que quieras mostrar en el modal.
        </p>
        <input type="text s"></input>
        <button onClick={() => setIsModalOpen(false)}>salir</button>
      </Modal>
    </>
  );
}

export default ButtonResume;
