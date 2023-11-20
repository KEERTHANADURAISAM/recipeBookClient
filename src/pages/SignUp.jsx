import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const SignUp = () => {
  const formik = useFormik({
    initialValues : {
      name:"",
      email : "",
      password : ""
    }, 
    validate : (values) => {
          let errors = {}
          if(values.name === ""){
            errors.name = "please Enter Your name"
        }
          if(values.email === ""){
              errors.email = "please Enter Your email"
          }
          if(values.password === ""){
            errors.password = "please Enter your password"
          }
          return errors
    },
    onSubmit: async (values) =>{
     
        const loginData = await axios.post(`https://recipebook-server-5jn5.onrender.com/register`,values);
    console.log(loginData)
  }
  })
  return (
    <Container>
    <h1>Registration Form</h1>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}            
          required
        />
      </Form.Group>
      <Link to={"/portal/login"}>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Link>
      <p>
        Already Have an account ? <Link to={"/portal/login"}>Login</Link>
      </p>
    </Form>
  </Container>
  );
};

export default SignUp;
