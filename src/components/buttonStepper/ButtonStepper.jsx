import React from "react";
import { Button } from "./style/Button.style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
function ButtonStepper({ next, active, porcentageProgress }) {
  const { setProgress, progress } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const validations = () => {
    if (typeof next === "object") {
      navigate(next.pathname);
      localStorage.clear();
    } else {
      navigate(`/sales${next}`); 
    }
  };

  React.useEffect(() => {
    setProgress(porcentageProgress)
    localStorage.setItem("progress", porcentageProgress);
  }, []);

  return (
    <Button disabled={!active} onClick={validations}>
      {porcentageProgress === 100 ? "Finalizar" : "Sigamos"}
      
      <ArrowForwardOutlinedIcon />
    </Button>
  );
}

export default ButtonStepper;
