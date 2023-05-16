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
  const [optionSelected, setOptionSelected] = React.useState({ 
    "Posee parqueadero": false, 
    "es cubierto": false 
  });
  
  React.useEffect(() => {
    const selectedOptions = Object.keys(optionSelected).filter(
      (option) => optionSelected[option]
    );
    const lastOption = selectedOptions.pop();
    const optionsString = [selectedOptions.join(', '), lastOption].filter(Boolean).join(' y ');
    localStorage.setItem("parking", optionsString);
  }, [optionSelected]);

  const handleSwitchChange = (option) => {
    setOptionSelected((prev) => ({ ...prev, [option]: !prev[option] }));
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
              <label className="switch" htmlFor="checkbox-parking">
                <input 
                  type="checkbox" 
                  id="checkbox-parking" 
                  onChange={() => handleSwitchChange("Posee parqueadero")}
                  checked={optionSelected["Posee parqueadero"]}
                />
                <div className="slider round"></div>
              </label>
            </StyledSwitch>
            Posee parqueadero
          </WrapperSwitch>
          {optionSelected["Posee parqueadero"] ? (<WrapperSwitch >
            <StyledSwitch>
              <label className="switch" htmlFor="checkbox-covered">
                <input 
                  type="checkbox"
                  id="checkbox-covered" 
                  onChange={() => handleSwitchChange("Es cubierto")}
                  checked={optionSelected["Es cubierto"]}
                />
                <div className="slider round"></div>
              </label>
            </StyledSwitch>
            es cubierto
          </WrapperSwitch>):null}
    
      </WrapperInputForm>
      <ButtonStepper active={true} next={data.next} />
    </WrapperForm>
  );
}

export default Parking;
