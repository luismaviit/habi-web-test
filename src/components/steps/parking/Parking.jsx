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


function Parking({ data }) {
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const validation = (event) => {
    setError(event.target.checked)
    console.log(event.target.checked)
  };

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
       
          <WrapperSwitch >
            <StyledSwitch>
              <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={validation}/>
                <div className="slider round"></div>
              </label>
            </StyledSwitch>
            Posee parqueadero
          </WrapperSwitch>
          {error ? (<WrapperSwitch >
            <StyledSwitch>
              <label className="switch" htmlFor="checkbox">
                <input type="checkbox" />
                <div className="slider round"></div>
              </label>
            </StyledSwitch>
            Es cubierto
          </WrapperSwitch>):null}
    
      </WrapperInputForm>
      <ButtonStepper active={true} next={data.next} />
    </WrapperForm>
  );
}

export default Parking;
