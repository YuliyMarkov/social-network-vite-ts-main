import { useState, useEffect, KeyboardEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { Heading } from "../../components/Typography/Heading";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Input } from "../../components/UI/Input/Input";
import { StyledPhoneSMS } from "./PhoneSMS.style";

export const PhoneSMS = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  if (!email) {
    alert("Email не найден. Попробуйте снова.");
    navigate("/");
    return;
  }

  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleInputChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        document.getElementById(`input-${index + 1}`).focus();
      }

      if (newCode.every((digit) => digit !== "")) {
        navigate("/repeatPassword-page", { state: { email } });
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <Container>
      <StyledPhoneSMS>
        <Heading headingText="Введите код" />
        <Paragraph
          headingText="Пожалуйста, введите код из SMS, который был отправлен на ваш номер телефона"
        />
        <span>{`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}`}</span>
        <form onSubmit={handleSubmit}>
          <div className="code">
            {code.map((value, index) => (
              <Input
                key={index}
                id={`input-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
              />
            ))}
          </div>
          <div className="noCode">
            <Paragraph 
              headingText="Код не пришел?" 
              linkText="Отправить повторно" 
              linkHref="/forgotPassword-page" 
            />
          </div>
        </form>
      </StyledPhoneSMS>
    </Container>
  );
};
