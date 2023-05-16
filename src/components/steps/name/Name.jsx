import React from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { validationName } from "../../../const/validations";
import { AuthContext } from "../../../context/AuthContext";
function Name({ data }) {
  /* const { name, setName} = React.useContext(AuthContext); */
  const [name, setName] = React.useState("");

  const [error, setError] = React.useState(false);

  const validation = (event) => {
    setError(validationName(event.target.value));
    setName(event.target.value);
  };
  React.useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputForm
          onChange={validation}
          type="text"
          value={name}
          defaultValue={localStorage.getItem("name")}
        />
        {error ? "Nombre correcto, puedes continuar" : "Nombre inválido"}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Name;
