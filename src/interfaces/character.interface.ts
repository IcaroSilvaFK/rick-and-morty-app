export interface ICharacterProps {
  id: number;
  name: string;
  species: string;
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
