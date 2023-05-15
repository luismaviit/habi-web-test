import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const WrapperForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 5rem;
padding: 0rem 10rem;
animation: ${fadeIn} 1s ease-in-out;

`
export const TittleForm = styled.h1`
color:#7c01ff;
text-align: left;

`
export const ContentForm = styled.div`
color: rgb(109, 105, 112);
font-size: 1.2rem;
flex-direction:row;
`

export const WrapperInputForm = styled.div`
display: flex;
flex-direction: column;
color: rgba(109, 105, 112, 0.5);
gap: 1rem;
`
export const InputFormImg = styled.input`
height: 200px;
width: 200px;
background-color: rgba(109, 105, 112, 0.1);
border-radius: 10px;
cursor: pointer;
border:  rgba(109, 105, 112, 0.4) 3px dotted;
`

export const InputForm = styled.input`
width : 502px;
height: 34px;
border-radius:10px;
font-size: 1.2rem;
`

export const WrapperSwitch = styled.div`
color: rgb(109, 105, 112);
display: flex;
align-items: center;
font-size: 1.2rem;
gap: 0.5rem;

`
export const StyledSwitch = styled.div`
  .switch {
    display: flex;
    height: 24px;
    position: relative;
    width: 40px;
  }

  .switch input {
    display:none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 3px;
    content: "";
    height: 18px;
    left: 3px;
    position: absolute;
    transition: .4s;
    width: 18px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(16px);
  }

  .slider.round {
    border-radius: 24px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;