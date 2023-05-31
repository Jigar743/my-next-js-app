import { useRef } from "react";
import {
  LoginContainer,
  Form,
  Fieldset,
  Button,
  Label,
  Input,
  FormField,
  Image,
} from "../styles/FormStyling.styled";
import axios from "axios";
import { API_ROUTES } from "../Helpers/ApiManage";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { isAuthenticated } from "../Helpers/AuthHandler";

export default function login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberMeCheck = useRef();
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.loginUser, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (response.status === 200) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
        localStorage.setItem("token", response.data.token);
        Cookies.set("token", response.data.token);
        router.replace("/users");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <FormField>
            <Label htmlFor="emailId">Email: </Label>
            <Input
              ref={emailRef}
              id="emailId"
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </FormField>
          <FormField topMargin>
            <Label htmlFor="passwordId">Password: </Label>
            <Input
              ref={passwordRef}
              id="passwordId"
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </FormField>
          <div>
            <input
              ref={rememberMeCheck}
              id="remeberMeId"
              type="checkbox"
              name="rememberMe"
            />
            <label htmlFor="remeberMeId"> Remember me</label>
          </div>
          <Button type="submit">Login</Button>
        </Fieldset>
      </Form>
      <p>
        Don't have Account? <Link href={"/signup"}>Create New Account</Link>
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
