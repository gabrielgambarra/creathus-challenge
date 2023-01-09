import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

interface Props {
  name: string;
  title: string;
}

const InputFile = ({ name, title }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

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
    <>
      <label htmlFor={name}>{title}</label>
      <input
        ref={inputRef}
        type="file"
        id={name}
        name={name}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default InputFile;
