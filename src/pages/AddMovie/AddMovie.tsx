import { Form } from "@unform/web";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import api from "../../utils/api";
import { AddMovieContainer, AddMovieForm, FormActions } from "./AddMovieStyle";
import { imgIsInTheRightSize, validateForm } from "./validation";

const AddMovie = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const buildPayload = (data: any) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image") {
        formData.append(key, data.image);
      } else {
        formData.append(key, value as string);
      }
    });

    return formData;
  };

  async function handleSubmit(data: any) {
    validateForm(data, formRef, async () => {
      imgIsInTheRightSize(data.image, formRef, async () => {
        try {
          const payload = buildPayload(data);
          await api.post("/movies", payload, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      });
    });
  }

  return (
    <AddMovieContainer>
      <AddMovieForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" title="Título" type="text" />

          <Input name="description" title="Descrição" textarea />

          <InputFile name="image" title="Imagem" />

          <FormActions>
            <button onClick={() => navigate("/")}>Cancelar</button>
            <button type="submit">Adicionar</button>
          </FormActions>
        </Form>
      </AddMovieForm>
    </AddMovieContainer>
  );
};

export default AddMovie;
