import styled from "styled-components";

export const Logo = styled.img`
  width: 342px;
  height: 180px;
  margin-left: 36px;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    width: 342px;
    height: 280px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  font-weight: 700;
  margin-top: 30px;

`;

export const InputContainer = styled.div`
  width: fit-content;
  background-color: transparent;
  position: absolute;
  top: 350px;
  display: flex;
  flex-direction: column;
  padding: 0 36px;
  @media screen and (max-width: 600px) {
    top: 450px
 
}
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 14px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.25);
  padding-left: 16px;
  font-weight: 300;
  line-height: 21px;
  outline: none;
`;

export const InputLabel = styled.p`
  width: 200px;
  height: 22px;
  color: #eeeeee;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41;
  margin-left: 40px;
`;
