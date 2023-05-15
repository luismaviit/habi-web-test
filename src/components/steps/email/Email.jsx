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
import { validationEmail } from "../../../const/validations"
function Email({ data }) {
  const [error, setError] = React.useState(false)
  const navigate = useNavigate();
  const validation= (event)=>{
    setError(validationEmail(event.target.value))
    
  }

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="email"/>
        {error ? "Correo correcto, puedes continuar" : "Correo inválido"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Email;
