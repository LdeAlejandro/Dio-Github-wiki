import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;

  input {
    background: transparent;
    border: 0px;
    width: 90%;
    padding: 0 20px;
    height: 62px;
    color: #fff;
    font-size: 20px;

  }

  input:focus {
    outline: none;
  }

    input::placeholder {
    color: #fff; /* Set to white or a visible color */
    opacity: 0.7; /* Optional: Adjust opacity for visibility */
  }

  

  
`;
