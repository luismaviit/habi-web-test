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
import { validationNumber } from "../../../const/validations";

function Elevator({ data }) {
  const perks = ["Posee eleveador"]
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const validation = (event) => {
    setError(validationNumber(event.target.value));
  };

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
                <input type="checkbox" id={`checkbox-${index}`} />
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
