import * as Yup from "yup";

export function initialValues() {
    return {
      username: "ezarate",
      password: "123456",
    };
  }
  
export function validationSchema() {
    return {
      username: Yup.string().required("Por favor ingrese su nombre de usuario"),
      password: Yup.string().required("Por favor ingrese su contraseña"),
    };
  }