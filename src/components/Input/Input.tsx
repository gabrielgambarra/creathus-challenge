import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

interface Props {
  name: string;
  title: string;
  type?: string;
  textarea?: boolean;
}

const Input = ({ name, textarea, title, type }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
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
      {!textarea ? (
        <>
          <input
            ref={inputRef}
            type={type}
            id={name}
            name={name}
            defaultValue={defaultValue}
          />
        </>
      ) : (
        <>
          <textarea
            ref={inputRef}
            id={name}
            name={name}
            cols={30}
            rows={5}
            defaultValue={defaultValue}
          ></textarea>
        </>
      )}
    </>
  );
};

export default Input;
