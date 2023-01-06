import Modal from "react-modal";
import { MovieInfo } from "../../models/MovieInfo.interface";
import {
  ActionRow,
  DescriptionContainer,
  ImageContainer,
  ModalContainer,
} from "./MovieDetailStyle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    padding: "1em",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  film?: MovieInfo;
}

const MovieDetail = ({ isOpen, closeModal, film }: Props) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <ModalContainer>
        <ActionRow>
          <button onClick={closeModal}>Fechar</button>
        </ActionRow>
        <ImageContainer>
          <img src={film?.image} alt="Movie poster" />
        </ImageContainer>
        <h2>{film?.title}</h2>
        <DescriptionContainer>{film?.description}</DescriptionContainer>
      </ModalContainer>
    </Modal>
  );
};

export default MovieDetail;
