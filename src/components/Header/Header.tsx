import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link to={`movies`}>Filmes</Link>
        </li>
        <li>
          <Link to={`create`}>Adicionar</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
