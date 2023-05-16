import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { validationEmail } from "../../../const/validations"
function Email({ data }) {
  const [error, setError] = React.useState(false)
  const [email, setEmail] = React.useState("");
  const validation= (event)=>{
    setError(validationEmail(event.target.value))
    setEmail(event.target.value)
    
  }
  React.useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="email" value={email}/>
        {error ? "Correo correcto, puedes continuar" : "Correo inválido"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Email;
