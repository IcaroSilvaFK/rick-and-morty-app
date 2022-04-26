import { useNavigate } from "react-router-dom";

import { useCharacters } from "../../hooks/useCharachters";

import {
  MdSignalWifiStatusbar3Bar,
  MdSignalWifiConnectedNoInternet0,
  MdSignalWifiStatusbarConnectedNoInternet2,
  MdPerson,
} from "react-icons/md";
import { FaRedditAlien } from "react-icons/fa";

import { Error } from "../Error";
import { Loading } from "../Loading";

import {
  Container,
  CardContainer,
  ContainerContent,
  Alive,
  Dead,
  Unknown,
  ContainerSpecies,
  Button,
} from "./styles";

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
        <CardContainer key={element.id}>
          <img src={element.image} alt={element.name} />
          <ContainerContent>
            <strong>{element.name}</strong>
            <div className='container__status'>
              <ContainerSpecies>
                {element.species === "Human" ? (
                  <>
                    <MdPerson />
                    {element.species}
                  </>
                ) : (
                  <>
                    <FaRedditAlien />
                    {element.species}
                  </>
                )}
              </ContainerSpecies>
              {element.status === "Alive" ? (
                <Alive>
                  <MdSignalWifiStatusbar3Bar />
                  <span>{element.status}</span>
                </Alive>
              ) : element.status === "Dead" ? (
                <Dead>
                  <MdSignalWifiConnectedNoInternet0 />
                  <span>{element.status}</span>
                </Dead>
              ) : (
                <Unknown>
                  <MdSignalWifiStatusbarConnectedNoInternet2 />
                  <span>{element.status}</span>
                </Unknown>
              )}
            </div>
            <Button onClick={() => navigate(`/character/${element.id}`)}>
              more info from character
            </Button>
          </ContainerContent>
        </CardContainer>
      ))}
    </Container>
  );
}
