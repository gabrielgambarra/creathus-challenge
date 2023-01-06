import { HeaderContainer, StyledNavLink } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <StyledNavLink to={`movies`}>Filmes</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={`create`}>Adicionar</StyledNavLink>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
