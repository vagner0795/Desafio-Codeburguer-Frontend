import {
  Title,
  Logo,
  ButtonContainer,
  User,
  DeleteButton,
  RequestContainer,
  InputImage,
} from "./styles";
import Trash from "../../assets/trash.svg"
import { Card } from "../../Components/Card";
import LogoPedidos from "../../assets/logo-request.svg";
import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const MeusPedidos = () => {
  const [user, setUser] = useState([]);

  const history = useHistory();

  function goBackPage() {
    history.push("/");
  }

  async function deleteUser(userId) {
    await axios.delete(`https://my-api-coral.vercel.app/order/${userId}`);
    const newUsers = user.filter((user) => user.id !== userId);

    setUser(newUsers);
  }

  useEffect(() => {
    async function fetchUser() {
      const { data: newRequests } = await axios.get(
        "https://my-api-coral.vercel.app/order"
      );

      setUser(newRequests);
    }

    fetchUser();
  }, []);

  return (
    <Card>
      <Logo src={LogoPedidos} />
      <Title>Pedidos</Title>
      <RequestContainer>
        <ul>
            {user.map((client) => (
              <User key={client.id}>
                <p>{client.pedidos}</p>
                <h2>{client.name}</h2>
                <DeleteButton onClick={() => deleteUser(client.id)}>
                  <InputImage src={Trash} />
                </DeleteButton>
              </User>
            ))}
        </ul>
      </RequestContainer>
      <ButtonContainer>
        <Button onClick={goBackPage} props={"Voltar"} />
      </ButtonContainer>
    </Card>
  );
};

export default MeusPedidos;
