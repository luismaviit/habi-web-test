import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { useNavigate } from "react-router-dom";
import { validationNumber } from "../../../const/validations"
function Floors({ data }) {

  const [error, setError] = React.useState(false)
  const navigate = useNavigate();
  const validation= (event)=>{
    setError(validationNumber(event.target.value))
    
  }

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="email"/>
        {error ? "Piso correcto, puedes continuar" : "Piso inválido"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Floors;
