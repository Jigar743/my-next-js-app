import { useRef, useState } from "react";
import {
  Button,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
  LoginContainer,
} from "../styles/FormStyling.styled";
import axios from "axios";
import { API_ROUTES } from "../Helpers/ApiManage";
import Link from "next/link";
import { useRouter } from "next/router";
import { isAuthenticated } from "../Helpers/AuthHandler";
import Cookies from "js-cookie";

export default function signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberMeCheck = useRef();
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    try {
      const response = await axios.post(API_ROUTES.signupUser, {
        name,
        email,
        password,
      });
      if (response.status === 200) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        localStorage.setItem("token", response.data.token);
        Cookies.set("token", response.data.token);
        router.replace("/users");
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
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

export async function getServerSideProps(context) {
  const { isLoggedIn, user } = await isAuthenticated(context);
  if (isLoggedIn && user !== null) {
    return {
      redirect: {
        destination: "/users",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
