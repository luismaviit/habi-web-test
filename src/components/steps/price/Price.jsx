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
import { validationPrice } from "../../../const/validations"
function Price({ data }) {

  const [error, setError] = React.useState(false)
  const navigate = useNavigate();
  const validation= (event)=>{
    setError(validationPrice(event.target.value))
    
  }

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="number"/>
        {error ? "Precio proyectado correcto, puedes continuar" : "El precio proyectado no puede ser menor a 1 millón de pesos"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Price;
