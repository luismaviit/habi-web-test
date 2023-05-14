import React from "react";
import {
  ProgressBarContainer,
  ProgressBarFill,
} from "./style/ProgressBar.style";

const ProgressBar = ({ progress }) => (
  <ProgressBarContainer>
    <ProgressBarFill progress={progress} />
  </ProgressBarContainer>
);

export default ProgressBar;
