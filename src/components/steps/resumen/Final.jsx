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

function Final({ data }) {
  const perks = ["Posee eleveador"];
  const [error, setError] = React.useState(false);  

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion} </ContentForm>
      <ButtonStepper active={!error} next={data.next}  />
    </WrapperForm>
  );
}

export default Final;
