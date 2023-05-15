import React, { useEffect } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import Form from "../../components/form/Form";
import ButtonResume from "../../components/buttonResume/ButtonResume";
import {
  WrapperSales,
  Nav,
  Logo,
  WrapperForm,
  TittleResume,
  WrapperResume,
} from "./style/Sales.style";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { AuthContext } from "../../context/AuthContext";
import ContentResumen from "../../components/contentResumen/ContentResumen";
function Sales() {
  const { progress } = React.useContext(AuthContext);

  return (
    <WrapperSales>
      <Nav>
        <Logo
          src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/524/000/original/habi-morado.png?1642725015"
          alt="Habi logo"
        />
      </Nav>
      <WrapperForm>
        <ProgressBar progress={parseInt(progress)} />
        <Form />
      </WrapperForm>
      <WrapperResume>
        <TittleResume>
          <DescriptionIcon fontSize="large" />
          Resumen
        </TittleResume>
        <ContentResumen/>
      </WrapperResume>
      <ButtonResume />
    </WrapperSales>
  );
}

export default Sales;
