import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  margin-bottom: 0.5em;
  height: 60px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 0.5em;
      font-size: 1.2em;
      font-weight: 600;
      color: #333;
      cursor: pointer;
    }
  }
`;
