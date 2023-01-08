import styled from "styled-components";

export const ModalContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;

  h2 {
    margin: 0.5em 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    max-width: 30%;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin: 0 0.5em;
    padding: 0.5em;
    cursor: pointer;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  overflow: auto;

  p {
    margin: 0;
  }
`;
