import { useNavigate } from "react-router-dom";
import {
  MdSignalWifiStatusbar3Bar,
  MdSignalWifiConnectedNoInternet0,
  MdSignalWifiStatusbarConnectedNoInternet2,
  MdPerson,
} from "react-icons/md";
import { FaRedditAlien } from "react-icons/fa";

import {
  CardContainer,
  ContainerContent,
  Alive,
  Dead,
  Unknown,
  ContainerSpecies,
  Button,
} from "./styles";
import { ICharacterProps } from "../../interfaces/character.interface";

export function Card({
  gender,
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
}: ICharacterProps) {
  const navigate = useNavigate();

  return (
    <CardContainer key={id}>
      <img src={image} alt={name} />
      <ContainerContent>
        <strong>{name}</strong>
        <div className='container__status'>
          <ContainerSpecies>
            {species === "Human" ? (
              <>
                <MdPerson />
                {species}
              </>
            ) : (
              <>
                <FaRedditAlien />
                {species.split(" ")[0]}
              </>
            )}
          </ContainerSpecies>
          {status === "Alive" ? (
            <Alive>
              <MdSignalWifiStatusbar3Bar />
              <span>{status}</span>
            </Alive>
          ) : status === "Dead" ? (
            <Dead>
              <MdSignalWifiConnectedNoInternet0 />
              <span>{status}</span>
            </Dead>
          ) : (
            <Unknown>
              <MdSignalWifiStatusbarConnectedNoInternet2 />
              <span>{status}</span>
            </Unknown>
          )}
        </div>
      </ContainerContent>
      <Button onClick={() => navigate(`/character/${id}`)}>
        more info from character
      </Button>
    </CardContainer>
  );
}
