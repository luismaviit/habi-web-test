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

function Beginning({ data }) {
  const perks = ["Posee eleveador"];
  const [error, setError] = React.useState(false);
  const validation = (event) => {
    setError(event.target.checked);
  };
  React.useEffect(() => {
    if (error) {
      localStorage.setItem("beginning", "Aceptadas");
    } else {
      localStorage.setItem("beginning", "Negadas");
    }
  }, [error]);
  return (
    <WrapperForm>
      <TittleForm>
        {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        {perks.map((data, index) => (
          <WrapperSwitch key={index}>
            <StyledSwitch>
              <label className="switch" htmlFor={`checkbox-${index}`}>
                <input
                  type="checkbox"
                  onChange={validation}
                  id={`checkbox-${index}`}
                />
                <div className="slider round"></div>
              </label>
            </StyledSwitch>
            Acepto terminos y condiciones en el uso de los datos.
          </WrapperSwitch>
        ))}
      </WrapperInputForm>
      <ButtonStepper porcentageProgress={data.porcentageProgress} active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Beginning;
