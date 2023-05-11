import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  max-width: 400px;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const StyledPaper = styled.div`
  padding: 3rem;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`;

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledBox>
      {steps.map((step, index) => (
        <div key={step.label}>
          <h2>
            {step.label}
            {index === 2 && <span>Last step</span>}
          </h2>
          <p>{step.description}</p>
          <div>
            <StyledButton onClick={handleNext}>
              {index === steps.length - 1 ? 'Finish' : 'Continue'}
            </StyledButton>
            <StyledButton disabled={index === 0} onClick={handleBack}>
              Back
            </StyledButton>
          </div>
        </div>
      ))}
      {activeStep === steps.length && (
        <StyledPaper>
          <p>All steps completed - you're finished</p>
          <StyledButton onClick={handleReset}>
            Reset
          </StyledButton>
        </StyledPaper>
      )}
    </StyledBox>
  );
}

export default VerticalLinearStepper;

