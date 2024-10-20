import styled from "styled-components";

export const StyledRegistrationInfo = styled.div`

  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};

  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;

    a {
      display: inline;
      color: ${(props) => props.theme.colors.primeColor};
    }
  }

  p {
    margin-bottom: 30px;
  }
  .icons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
`