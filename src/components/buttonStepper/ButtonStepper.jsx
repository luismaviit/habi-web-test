import React from "react";
import { Button } from "./style/Button.style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
function ButtonStepper({ next, active }) {
  const { setProgress, progress } = React.useContext(AuthContext);

  const validations = () => {
    navigate(`/sales${next}`);
    setProgress(progress + 10);
  };
  const navigate = useNavigate();
  return (
    <Button disabled={!active} onClick={() => validations()}>
      Sigamos <ArrowForwardOutlinedIcon />{" "}
    </Button>
  );
}

export default ButtonStepper;
