import { useState } from "react";
import {
  Button,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
  LoginContainer,
} from "../styles/FormStyling";
import axios from "axios";
import { API_ROUTES } from "../Helpers/ApiManage";
import Link from "next/link";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.signupUser, {
        name,
        email,
        password,
      });
      if (response) {
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log({ signupErr: error });
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Fieldset signupForm>
          <FormField>
            <Label htmlFor="nameId">Name: </Label>
            <Input
              id="nameId"
              type="text"
              name="userName"
              placeholder="Enter name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField topMargin>
            <Label htmlFor="emailId">Email: </Label>
            <Input
              id="emailId"
              type="email"
              name="userEmail"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField topMargin>
            <Label htmlFor="passwordId">Password: </Label>
            <Input
              id="passwordId"
              type="password"
              name="userPassword"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Button type="submit">Signup</Button>
        </Fieldset>
      </Form>
      <p>
        Already have account? <Link href={"/login"}>Signin</Link>
      </p>
    </LoginContainer>
  );
}
