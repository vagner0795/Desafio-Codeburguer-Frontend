import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const ContainerBody = styled.body`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const CardItems = styled.div`
  width: 414px;
  height: 100%;
  background-color: #0a0a10;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 414px;
    height: 896px;
    padding: 0;
  }
`;
