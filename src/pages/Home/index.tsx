import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import { useCharacters } from "../../hooks/useCharachters";
import { Card } from "../../components/Card";

import { Container, Footer } from "./styles";

export function Home() {
  const { characters, error, loading, page, handleNextPage, handlePrevPage } =
    useCharacters();

  if (error) {
    return <h1>Hello</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Container>
        {characters.map((element) => (
          <Card
            gender={element.gender}
            id={element.id}
            image={element.image}
            location={element.location}
            name={element.name}
            origin={element.origin}
            species={element.species}
            status={element.status}
            key={element.id}
          />
        ))}
      </Container>
      <Footer>
        <button onClick={handlePrevPage} disabled={page < 2}>
          <BsArrowLeftShort size={25} />
        </button>
        <button onClick={handleNextPage}>
          <BsArrowRightShort size={25} />
        </button>
      </Footer>
    </>
  );
}
