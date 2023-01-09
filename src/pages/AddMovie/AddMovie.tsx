import { Form } from "@unform/web";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import api from "../../utils/api";
import { AddMovieContainer, AddMovieForm, FormActions } from "./AddMovieStyle";

const AddMovie = () => {
  const navigate = useNavigate();

  async function handleSubmit(data: any) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image") {
        formData.append(key, data.image);
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      await api.post("/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AddMovieContainer>
      <AddMovieForm>
        <Form onSubmit={handleSubmit}>
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
