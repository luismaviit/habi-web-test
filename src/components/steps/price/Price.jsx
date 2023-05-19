import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { validationPrice } from "../../../const/validations"
function Price({ data }) {
  const [error, setError] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const validation= (event)=>{
    setError(validationPrice(event.target.value))
    setPrice(event.target.value)
  }
  React.useEffect(() => {
    localStorage.setItem("price", price);
  }, [price]);

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
      <ButtonStepper porcentageProgress={data.porcentageProgress} active={error} next={data.next} value={price}/>
    </WrapperForm>
  );
}

export default Price;
