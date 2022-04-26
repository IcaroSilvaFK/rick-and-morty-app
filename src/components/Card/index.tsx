import { useNavigate } from "react-router-dom";

import { useCharacters } from "../../hooks/useCharachters";

import { Error } from "../Error";
import { Loading } from "../Loading";

import { Container } from "./styles";

export function Card() {
  const navigate = useNavigate();

  const { characters, error, loading } = useCharacters();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {characters.map((element) => (
        <div key={element.id}>
          <img src={element.image} alt={element.name} />
          <div>
            <strong>{element.name}</strong>
            <div>
              <span>{element.location.name}</span>
              <span
                className={
                  element.status === "Alive"
                    ? "alive"
                    : element.status === "Dead"
                    ? "dead"
                    : element.status === "unknown"
                    ? "unknown"
                    : ""
                }
              >
                {element.status}
              </span>
            </div>
            <div>
              <button onClick={() => navigate(`/character/${element.id}`)}>
                more info for character
              </button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
