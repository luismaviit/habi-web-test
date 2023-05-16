import React from "react";
import {
  ListContainer,
  ListItem,
  IconContainer,
} from "./style/ContentResumen.style";
import { Paths } from "../../const/paths";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
function ContentResumen() {
  return (
    <ListContainer>
      {Paths.map((path, index) => (
        <ListItem key={index}>
          <IconContainer>
            <path.icon />
          </IconContainer>
          <div>{path.name}:</div>
          <div>
            {localStorage.getItem(`${path.nameState}`) === null ||
            localStorage.getItem(`${path.nameState}`) === ""
              ? ""
              : localStorage.getItem(`${path.nameState}`)}
          </div>
          <div>
          {localStorage.getItem(`${path.nameState}`) === null ||
            localStorage.getItem(`${path.nameState}`) === ""
              ?""
              : <CheckCircleOutlinedIcon color="success" />}
            
          </div>
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default ContentResumen;
