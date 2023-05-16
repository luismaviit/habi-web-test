import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { validationAddress } from "../../../const/validations"
function Address({ data }) {
  const [error, setError] = React.useState(false)
  const [address, setAddress] = React.useState("");
  
  const validation= (event)=>{
    setError(validationAddress(event.target.value))
    setAddress(event.target.value)
  }
  React.useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="email"/>
        {error ? "Dirección correcta, puedes continuar" : "Dirección inválida"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Address;
