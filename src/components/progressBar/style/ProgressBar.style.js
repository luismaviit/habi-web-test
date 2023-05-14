import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #7c01ff;
  border-radius: 5px;
  width: ${props => props.progress}%;
  transition: width 0.4s ease-in-out;
`;
