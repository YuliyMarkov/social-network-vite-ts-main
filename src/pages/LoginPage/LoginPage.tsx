import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as yup from "yup";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup.string().required("Обязательное поле").email("Введите коректно свою почту"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать более 8 цифр"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(""); // State for managing login error
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError, // To set error on specific fields
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
  
    const user = storedData.find((user: { userEmail: string; userPassword: string; }) => user.userEmail === data.userEmail && user.userPassword === data.userPassword);
  
    if (user) {
      navigate("/profile-page"); 
    } else {
      setError("userPassword", { type: "manual", message: "Неправильный логин или пароль" });
      setLoginError("Неправильный логин или пароль");
    }
  };
  

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Ваша почта"
                errorText={errors.userEmail?.message || loginError} 
                isError={!!errors.userEmail || !!loginError}
                {...field}
              />
            )}
          />

          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />

          <Button isPrimary={isValid} buttonText="Войти" />
        </form>
        <Linktext text="Забыли пароль?" href="/forgotPassword-page" />
        <RegistrationInfo />
      </StyledLoginPage>
    </Container>
  );
};