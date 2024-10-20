import styled from "styled-components";

export const StyledRegistrationPage = styled.div`

    box-shadow: 0 0 10px ${props => props.theme.colors.lightGray};
    border-radius: 20px;
    background-color: ${props => props.theme.colors.elemsBgc};
    margin: 0 auto;
    width: 80%;
    max-width: 500px;
    text-align: center;
    padding: 40px;

    h1 {
      margin-bottom: 50px;
    }

    a {
      display: inline-block;
      width: 100%;
      text-align: right;
      text-decoration: none;
      color: ${props => props.theme.colors.gray};

      &:hover {
        text-decoration: underline;
      }
    }


  @media (max-width: 530px) {

      width: 100%;
    }


  .icon {
    width: 100%;
    height: 100%;
  }
  .reg__link {
    flex: 0 0 58px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
