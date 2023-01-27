import { ButtonStyle } from "./styles";

export const Button = ({ props, ...rest }) => {
  return <ButtonStyle {...rest}>{props}</ButtonStyle>;
};
