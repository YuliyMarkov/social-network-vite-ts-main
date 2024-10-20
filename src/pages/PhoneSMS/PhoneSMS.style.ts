import styled from "styled-components";

export const StyledPhoneSMS = styled.div`

  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  background-color: var(--elems-bgc);
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 38.73px;
    margin-bottom: 16px;
  }


  span {
    display: block;
    font-size: 40px;
    font-weight: 500;
    line-height: 48.41px;
    text-align: center;
    margin-bottom: 32px;
    color: #717b9f;
  }
  .code{
    display: flex;
    gap: 32px;
    justify-content: center;
  }
  .noCode p{
font-size: 16px;
font-weight: 400;
line-height: 19.36px;
color:  #303030;
  }
  .noCode a{
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    color:  #526ED3;
      }
  input {
    width: 56px;
    height: 72px;
    gap: 24px;
    border-radius: 8px;
    margin-bottom: 48px;
    border: 2px solid var(--disabled-bgc);
    background-color: transparent;

font-size: 40px;
font-weight: 500;
line-height: 48.41px;
text-align: center;
  }

  button {
    width: 410px;
    height: 60px;
    padding: 10px 19px 10px 19px;
    gap: 10px;
    border-radius: 10px;
  }


@media (max-width: 530px) {

    width: 100%;

}



`;
