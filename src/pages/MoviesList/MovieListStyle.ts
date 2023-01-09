import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 1em;
`;

export const MoviesPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
`;
