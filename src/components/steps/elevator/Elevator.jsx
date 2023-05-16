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
function Elevator({ data }) {
  const perks = ["Posee eleveador"];
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const validation = (event) => {
    setError(event.target.checked);
  };
  React.useEffect(() => {
    if (error) {
      localStorage.setItem("elevator", "Si");
    } else {
      localStorage.setItem("elevator", "No");
    }
  }, [error]);
  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        {perks.map((perk, index) => (
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
            {perk}
          </WrapperSwitch>
        ))}
      </WrapperInputForm>
      <ButtonStepper active={true} next={data.next} />
    </WrapperForm>
  );
}

export default Elevator;
