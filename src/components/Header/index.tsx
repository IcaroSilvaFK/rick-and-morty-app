import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <h1>Rick and Morty</h1>
        <span>Infos from character</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>characters</Link>
          </li>
          <li>
            <Link to='/'>locations</Link>
          </li>
          <li>
            <Link to='/'>episodes</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
