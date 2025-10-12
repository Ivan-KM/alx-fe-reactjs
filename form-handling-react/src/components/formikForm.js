import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik form submitted:", values);
    alert("Formik registration successful!");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="username">Username:</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <label htmlFor="password">Password:</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
