import React, { useState } from "react";
import { Button, Container, Form, Nav } from "react-bootstrap";
import "../styles/Home.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

const Home = () => {
  const notify = () => toast.success("successfully Recipe Created");
  
  let formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      creationDate: "",
      ingredients: "",
      instructions: "",
      image: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.title === "") {
        errors.title = "please enter a Title";
      }
      if (values.author === "") {
        errors.author = "please enter a Author_Name ";
      }
      if (values.creationDate === "") {
        errors.creationDate = "please enter a  creationDate";
      }
      if (values.ingredients === "") {
        errors.ingredients = "please enter a  Ingredients";
      }
      if (values.instructions === "") {
        errors.instructions = "please enter a  Instructions";
      }
      if (values.image === "") {
        errors.image = "please enter a  Image_Url";
      }
      return errors;
    },
    // create recipe
    onSubmit: async (values) => {
      await axios.post(`https://recipebook-server-5jn5.onrender.com/createrecipe`, values);
      
    },
  });
  return (
    <>
        <Container>
        <h1>Welcome To My Recipe Book</h1>
        <p>We are here to serve you</p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              required
            />
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type={"text"}
              value={formik.values.author}
              onChange={formik.handleChange}
              name="author"
              required
            />
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.author}</span>
          </Form.Group>
          <Form.Group>
            <Form.Label>CreationDate</Form.Label>
            <Form.Control
              type={"date"}
              name="creationDate"
              value={formik.values.creationDate}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type={"text"}
              value={formik.values.ingredients}
              onChange={formik.handleChange}
              name="ingredients"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>instructions</Form.Label>
            <Form.Control
              type={"text"}
              value={formik.values.instructions}
              onChange={formik.handleChange}
              name="instructions"
              required
            />
          </Form.Group>{" "}
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type={"text"}
              value={formik.values.image}
              onChange={formik.handleChange}
              name="image"
              required
            />
          </Form.Group>
          <Button
            onClick={()=>notify()}
            variant="primary"
            type="submit"
            value="submit"
            disabled={!formik.isValid}
          >
            Create Recipe
          </Button>
          <Toaster/>
        </Form>
      </Container>
    </>
  );
};

export default Home;
