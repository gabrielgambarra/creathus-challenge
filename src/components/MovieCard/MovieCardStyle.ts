import styled from "styled-components";

export const MovieCardContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  max-width: 10em;
  height: calc(3 * 5em);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
  overflow: hidden;
  transition: all 0.1s ease-in-out;

  div {
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    height: 100%;
    text-align: center;
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #ccc;
    cursor: pointer;

    div {
      display: block;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
