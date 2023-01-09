import styled from "styled-components";

export const AddMovieContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

export const AddMovieForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      padding: 0.5em;
    }

    textarea {
      resize: none;
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1em;
`;
