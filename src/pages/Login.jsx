import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import {Link,useNavigate} from 'react-router-dom'
import { useFormik } from "formik";


const Login = () => {
  const formik = useFormik({
    initialValues : {
      email : "",
      password : ""
    }, 
    validate : (values) => {
          let errors = {}
          if(values.email === ""){
              errors.email = "please Enter Your email"
          }
          if(values.password === ""){
            errors.password = "please Enter your password"
          }
          return errors
    },
    onSubmit: async (values) =>{
      try {
        const loginData = await axios.post(`https://recipebook-server-5jn5.onrender.com/login`,values);
        if (loginData.status === 200) {
          navigate("/portal/login")
          window.localStorage.setItem("app-token",loginData.data.token)
        } else {
          
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  })
      

  return (
  <Container>
    <h1>Login Form</h1>
    <Form onSubmit={formik.handleSubmit}>
    <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control  type="email" name="email" 
            required   
            value={formik.values.title}
            onChange={formik.handleChange}
          />
    </Form.Group>
    <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formik.values.title}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
      <Link to={'/portal/home'} > <button className="btn-primary" type="submit">Login</button></Link>
    </Form>
  </Container>
  );
};

export default Login;
