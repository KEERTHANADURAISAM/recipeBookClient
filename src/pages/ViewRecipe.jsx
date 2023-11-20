import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import '../styles/ViewRecipeOnly.css'
import { useParams } from 'react-router-dom';

const ViewRecipe = () => {
  const params = useParams();
  const [getRecipe, setRecipe] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);
  let loaddata = async () => {
    try {
      let recipe = await axios.get(
        `https://recipebook-server-5jn5.onrender.com/userrecipe/${params.id}`
      );
      setRecipe(recipe.data);
      console.log(recipe.data)
      console.log(getRecipe)
    } catch (err) {}
  };
  return (
    <Container>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={getRecipe.image} />
    <Card.Body>
      <Card.Title>{getRecipe.title}</Card.Title>
      <Card.Text>
      Ingredients : {getRecipe.ingredients}
      </Card.Text>
      <Card.Text>
      Instructions : {getRecipe.instructions}
      </Card.Text>
    </Card.Body>
  </Card>   
  </Container>
  )
}

export default ViewRecipe