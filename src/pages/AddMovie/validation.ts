import * as yup from "yup";

let schema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
});

export const validateForm = async (
  formData: any,
  formRef: any,
  callBack: () => void
) => {
  try {
    await schema.validate(formData, {
      abortEarly: false,
    });
  } catch (err) {
    const validationErrors = {};
    if (err instanceof yup.ValidationError) {
      err.inner.forEach((error) => {
        // @ts-ignore
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);
    }
  } finally {
    callBack();
  }
};

export const imgIsInTheRightSize = (file: any, formRef: any): boolean => {
  let isInTheRightSize = false;
  if (!file) {
    isInTheRightSize = false;
    // @ts-ignore
    formRef.current.setFieldError("image", "Imagem obrigatória");

    return isInTheRightSize;
  }

  let img = new Image();
  img.src = window.URL.createObjectURL(file);
  img.onload = () => {
    if (img.width === 500 && img.height === 750) {
      isInTheRightSize = true;
      return true;
    }
    if (formRef !== null) {
      isInTheRightSize = false;
      // @ts-ignore
      formRef.current.setFieldError(
        "image",
        "Dimensão da imagem não suportada (500x750)."
      );
    }
    return true;
  };

  return isInTheRightSize;
};
