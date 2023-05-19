import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { validationNumber } from "../../../const/validations"
function Floors({ data }) {
  const [floor, setFloor] = React.useState("");
  const [error, setError] = React.useState(false)
  const validation= (event)=>{
    setError(validationNumber(event.target.value))
    setFloor(event.target.value)
  }
  React.useEffect(() => {
    localStorage.setItem("floor", floor);
  }, [floor]);

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm onChange={validation} type="number" value={floor}/>
        {error ? "Piso correcto, puedes continuar" : "Piso inválido"}
      </WrapperInputForm>
      <ButtonStepper porcentageProgress={data.porcentageProgress} active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Floors;
