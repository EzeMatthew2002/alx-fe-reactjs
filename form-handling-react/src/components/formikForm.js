// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with explicit Yup.string().required
const validationSchema = Yup.object({
  userName: Yup.string()
    .required("Please enter a name"),
  email: Yup.string()
    .email("Please enter a correct email")
    .required("Email is required"),
  passWord: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter a password"),
});

const FormikForm = () => {
  return (
    <div>
      <h2>Registration Form</h2>

      <Formik
        initialValues={{ userName: "", email: "", passWord: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            {/* Username */}
            <div>
              <label htmlFor="userName">UserName</label>
              <Field type="text" name="userName" />
              <ErrorMessage
                name="userName"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email">Enter your email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="passWord">Enter your password</label>
              <Field type="password" name="passWord" />
              <ErrorMessage
                name="passWord"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
