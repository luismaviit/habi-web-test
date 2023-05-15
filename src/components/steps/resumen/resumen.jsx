import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  StyledSwitch,
  WrapperInputForm,
  WrapperSwitch,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { useNavigate } from "react-router-dom";
import { validationNumber } from "../../../const/validations";

function Resumen({ data }) {
  const perks = ["Posee eleveador"]
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const validation = (event) => {
    setError(validationNumber(event.target.value));
  };

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
     
   
    </WrapperForm>
  );
}

export default Resumen;
