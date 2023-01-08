import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const MoviesPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;

  button {
    margin-left: 1em;
    padding: 0.5em;
    cursor: pointer;
  }
`;
