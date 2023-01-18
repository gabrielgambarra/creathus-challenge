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
  formRef.current.setErrors({});
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

export const imgIsInTheRightSize = (
  file: any,
  formRef: any,
  callback: () => void
) => {
  if (!file) {
    // @ts-ignore
    formRef.current.setFieldError("image", "Imagem obrigatória");
  }

  let img = new Image();
  img.src = window.URL.createObjectURL(file);
  img.onload = () => {
    if (img.width === 500 && img.height === 750) {
      callback();
    } else {
      // @ts-ignore
      formRef.current.setFieldError(
        "image",
        "Dimensão da imagem não suportada (500x750)."
      );
    }
    return true;
  };
};
