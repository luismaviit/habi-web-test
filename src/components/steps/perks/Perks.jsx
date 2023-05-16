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

function Perks({ data }) {
  const perks = ["Zona BBQ", "Salon comunal", "parque de juegos"];
  const [optionSelected, setOptionSelected] = React.useState(
    perks.reduce((obj, perk) => ({ ...obj, [perk]: false }), {})
  );
  
  React.useEffect(() => {
    const selectedPerks = Object.keys(optionSelected).filter(
      (perk) => optionSelected[perk]
    );
    const lastPerk = selectedPerks.pop();
    const perksString = [selectedPerks.join(', '), lastPerk].filter(Boolean).join(' y ');
    localStorage.setItem("perks", perksString);
  }, [optionSelected]);

  const handleSwitchChange = (perk) => {
    setOptionSelected((prev) => ({ ...prev, [perk]: !prev[perk] }));
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
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={optionSelected[perk]}
                  onChange={() => handleSwitchChange(perk)}
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

export default Perks;
