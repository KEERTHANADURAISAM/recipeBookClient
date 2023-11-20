import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/ViewRecipes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ViewRecipes = () => {
  const notify = () => toast.success("successfully Recipe Deleted");

  const [recipe, setRecipe] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    loadRecipe();
  }, []);
  const loadRecipe = async () => {
    setLoading(true);
    let getRecipes = await axios.get(
      "https://recipebook-server-5jn5.onrender.com/getrecipes"
    );
    setRecipe(getRecipes.data);
    setLoading(false);
  };
  let userDelete = async (id) => {
    console.log("Deleting recipe with id:", id);
    try {
      await axios.delete(`https://recipebook-server-5jn5.onrender.com/deleterecipe/${id}`);
      loadRecipe();
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
    
  };

  return (
    <>
      {isloading ? (
        <div className="d-flex justify-content-center mt-20">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <>
          {recipe.map((recipes, idx) => (
            <div className="card-div" key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={recipes.image}
                />
                <Card.Body>
                  <Card.Title>Title{recipes.title}</Card.Title>
                  <Card.Text>Author:{recipes.author}</Card.Text>
                  <Card.Text>creationDate: {recipes.creationDate}</Card.Text>
                  <Link to={`/portal/viewrecipe/${recipes._id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                  <Link to={`/portal/editrecipe/${recipes._id}`}>
                    <Button variant="primary">Edit Recipe</Button>
                  </Link>
                  <Button
                    variant="primary"
                    className="btn-color3"
                    onClick={() => userDelete(recipes._id)}
                  >
                    Delete Recipe
                  </Button>
                  <Toaster />
                </Card.Body>
              </Card>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ViewRecipes;
