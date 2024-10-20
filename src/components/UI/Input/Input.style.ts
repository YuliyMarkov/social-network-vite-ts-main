import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-bottom: 10px;
`;
interface SInterfaceProps {
  $isError: boolean;
}
export const StyleInut = styled.input<SInterfaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  background-color: transparent;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 200ms;
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};

  &:last-child {
    margin-bottom: 30px;
  }
  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
