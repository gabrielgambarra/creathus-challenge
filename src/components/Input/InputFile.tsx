import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import { InputContainer } from "./InputStyle";

interface Props {
  name: string;
  title: string;
}

const InputFile = ({ name, title, ...props }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.files[0];
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      <label htmlFor={name}>{title}</label>
      <input
        ref={inputRef}
        type="file"
        id={name}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
      {!error && (
        <span className="image-tip">Imagem deve ter 500x750 de tamanho</span>
      )}
      {error && <span className="error">{error}</span>}
    </InputContainer>
  );
};

export default InputFile;
