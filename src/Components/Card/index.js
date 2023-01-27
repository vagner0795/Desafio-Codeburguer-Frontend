import { CardItems, ContainerBody } from "./styles";

export const Card = ({ children }) => {
  return (
    <ContainerBody>
      <CardItems>{children}</CardItems>
    </ContainerBody>
  );
};
