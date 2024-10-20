import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Input } from "../../components/UI/Input/Input";
import { StyledRepeatPassword } from "./RepeatPassword.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom"; 

interface IPasswordForm {
  userPassword: string;
  userPasswordRepeat: string;
}

const PasswordFormScheme = yup.object({
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать не менее 8 символов"),
  userPasswordRepeat: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref('userPassword')], "Пароли должны совпадать"),
});

export const RepeatPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  if (!email) {
    alert("email не найден. Попробуйте заново.");
    navigate("/"); 
    return;
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPasswordForm>({
    resolver: yupResolver(PasswordFormScheme),
    mode: "onChange",
    defaultValues: {
      userPassword: "",
      userPasswordRepeat: ""
    },
  });

  const onLoginSubmit: SubmitHandler<IPasswordForm> = (data) => {
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");

    const userIndex = storedData.findIndex((user: { userEmail: any; }) => user.userEmail === email);

    if (userIndex !== -1) {
      storedData[userIndex].userPassword = data.userPassword;
      localStorage.setItem("users", JSON.stringify(storedData));
      navigate("/");
    } else {
      alert("Пользователь не найден. Попробуйте еще раз.");
    }
  };

  return (
    <Container>
      <StyledRepeatPassword>
        <Heading headingText="Придумайте пароль" />
        <Paragraph headingText="Введите новый пароль для вашей учетной записи." />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите новый пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
                value={field.value || ''}
              />
            )}
          />
          <Controller
            name="userPasswordRepeat"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Повторите пароль"
                errorText={errors.userPasswordRepeat?.message}
                isError={!!errors.userPasswordRepeat}
                {...field}
                value={field.value || ''}
              />
            )}
          />
          <Button 
            type="submit" 
            isPrimary={isValid} 
            buttonText="Восстановить пароль" 
          />
        </form>
      </StyledRepeatPassword>
    </Container>
  );
};
