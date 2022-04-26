export interface ICharacterProps {
  id: number;
  name: string;
  species: "Human" | "Alien";
  gender: string;
  location: {
    name: string;
  };
  image: string;
  status: "Alive" | "unknown" | "Dead";
  origin: {
    name: string;
  };
}
