import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ViewRecipes from "./pages/ViewRecipes";
import ViewRecipe from "./pages/ViewRecipe";
import EditRecipe from "./pages/EditRecipe";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route path="/portal" element={<Navbar />}>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="myrecipes" element={<ViewRecipes />} />
            <Route path="viewrecipe/:id" element={<ViewRecipe />} />
            <Route path="editrecipe/:id" element={<EditRecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
