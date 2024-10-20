import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IRegistrationForm {
  userName: string;
  userSurname: string;
  userPhone: string;
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
}

const RegistrationFormScheme = yup.object({
  userName: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите своё Имя"),
  userSurname: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите свою Фамилию"),
  userPhone: yup
    .string()
    .required("Обязательное поле")
    .matches(
      /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/,
      "Введите корректный номер телефона"
    ),
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту")
    .test(
      "unique",
      "Пользователь с таким email уже существует",
      function (value) {
        const storedData = JSON.parse(localStorage.getItem("users") || "[]");
        return !storedData.find((user: { userEmail: string }) => user.userEmail === value);
      }
    ),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать не менее 8 символов"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("userPassword")], "Пароли должны совпадать")
    .required("Повторите пароль"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(RegistrationFormScheme),
    defaultValues: {
      userName: "",
      userSurname: "",
      userPhone: "",
      userEmail: "",
      userPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    storedData.push(data);
    localStorage.setItem("users", JSON.stringify(storedData));
    navigate("/");
  };

  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onPasswordSubmit)} action="#">
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Имя"
                errorText={errors.userName?.message}
                isError={!!errors.userName}
                {...field}
              />
            )}
          />
          <Controller
            name="userSurname"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Фамилия"
                errorText={errors.userSurname?.message}
                isError={!!errors.userSurname}
                {...field}
              />
            )}
          />
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                placeholder="Номер телефона"
                errorText={errors.userPhone?.message}
                isError={!!errors.userPhone}
                {...field}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Электронная почта"
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Повторите пароль"
                errorText={errors.confirmPassword?.message}
                isError={!!errors.confirmPassword}
                {...field}
              />
            )}
          />

          <Button isPrimary={isValid} buttonText="Зарегистрироваться" />
        </form>
      </StyledRegistrationPage>
    </Container>
  );
};
