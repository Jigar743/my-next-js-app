import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const Form = styled.form``;

export const Fieldset = styled.fieldset`
  height: ${({ signupForm }) => (signupForm ? "350px" : "300px")};
  border: 0.15rem solid #9da2a742;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 27px;
  background: none;
  border: 0.1px solid #2121215e;
  border-radius: 23px;
  margin-top: 20px;
  background-color: #77c4ff !important;
  cursor: pointer;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 50px;
  border: 1px solid #aeaeae;
  border-radius: 16px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  height: 85px;
  justify-content: space-between;
  position: relative;
  margin-top: ${({ topMargin }) => (topMargin ? "20px" : "0")};
`;

export const Image = styled.img`
  cursor: pointer;
  position: absolute;
  width: 20px;
  right: 8px;
  top: 8px;
`;
