import React, { useState } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { user, userDetails } from "../../utils/userDB";
import {COLORS} from "../../utils/constants"
import {initialValues,validationSchema} from "../../utils/validator"
import * as Yup from "yup";


export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña son incorrectos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        placeholderTextColor={COLORS.yellow}
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={COLORS.yellow}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text onPress={formik.handleSubmit} style={styles.btnLogoun}>Iniciar sesión</Text> 

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    display:"flex",
    justifyContent:"center"
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
    backgroundColor: "rgba(29,52,84,0.7)",
    padding: 10,
    width:"100%",
    borderRadius: 10,
    color:COLORS.yellow
  },
  input: {
    color:"#fff",
    width:"80%",
    height: "10%",
    margin: 12,
    borderWidth: 1,
    borderColor:COLORS.yellow,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(29,52,84,0.7)",
  },
  error: {
    fontWeight: "bold",
    fontSize:16,
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
    padding: 10,
    borderRadius:10,
    backgroundColor: "rgba(29,52,84,0.7)"
  },
  btnLogoun: {
    fontSize: 16,
    fontWeight:"bold",
    textAlign: "center",
    color:COLORS.yellow,
    padding: 10,
    borderWidth:2,
    borderRadius: 10,
    borderColor:COLORS.yellow,
    marginTop:50,
    backgroundColor: COLORS.blue,
    width:"70%"
  },
});
