import styled from "styled-components";

export const Logo = styled.img`
  width: 246px;
  height: 200px;
  margin-left: 20%;
  margin-top: 35px;

  @media screen and (max-width: 600px) {
    width: 246px;
    height: 280px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    margin-top: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 499px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 36px;

  button {
    background-color: rgba(255, 255, 255, 0.14);
    margin-top: -150px;
    @media screen and (max-width: 600px) {
      margin-top: 0;
    }
  }
`;

export const InputImage = styled.img`
  width: 24px;
  height: 28px;
  margin-left: 290px;
  margin-top: 10px;
`;

export const DeleteButton = styled.a`
  margin-top: -90px;
`;

export const RequestContainer = styled.div`
  margin-left: 28px;

  li {
    margin: 15px 0px;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 360px;
  height: 115px;
  border: none;
  padding-left: 25px;
  padding-bottom: 10px;
  font-size: 20px;
  color: #ffffff;
  list-style: none;

  p {
    font-size: 22px;
    max-width: 80%;
  }

  h2 {
    font-size: 23px;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    height: 110px;

}
`;
