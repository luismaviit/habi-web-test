import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import Stepper from "../../components/stepper/Stepper";
import ButtonResume from "../../components/buttonResume/ButtonResume";
import {
  WrapperSales,
  Nav,
  Logo,
  WrapperForm,
  TittleResume,
  WrapperResume,
} from "./style/Sales.style";

function Sales() {
  return (
    <WrapperSales>
      <Nav>
        <Logo
          src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/524/000/original/habi-morado.png?1642725015"
          alt="Habi logo"
        />
      </Nav>
      <WrapperForm>Formulario</WrapperForm>
      <WrapperResume>
        <TittleResume>
          {" "}
          <DescriptionIcon fontSize="large" />
          Resumen
        </TittleResume>
      </WrapperResume>
      <ButtonResume/>
    </WrapperSales>
  );
}

export default Sales;
