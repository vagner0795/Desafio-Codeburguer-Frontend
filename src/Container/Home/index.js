import { useState, useRef,} from "react";
import {
  Title,
  Logo,
  Input,
  InputLabel,
  InputContainer,

} from "./styles";
import { Card } from "../../Components/Card";
import axios from "axios";

import LogoHome from "../../assets/logo-home.svg";

import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory()

  const [user, setUser] = useState([]);
  const inputName = useRef();
  const inputPedidos = useRef();

  console.log(user);

  async function addNewRequest() {
    const { data: newRequest } = await axios.post(
      "https://my-api-coral.vercel.app/order",
      {
        name: inputName.current.value,
        pedidos: inputPedidos.current.value,
      }
    );

    setUser([...user, newRequest]);

    history.push("/meuspedidos")
  }





  return (
    <Card>
      <Logo src={LogoHome} />
      <Title>Faça seu Pedido!</Title>
      <InputContainer>
        <InputLabel>Pedido</InputLabel>
        <Input
          ref={inputPedidos}
          placeholder="Pedido"
          autoComplete="disabled"
        />
        <br />
        <br />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome" autoComplete="disabled" />

        <Button onClick={addNewRequest} props={"Novo Pedido"} />
        <br />

      </InputContainer>
    </Card>
  );
};
