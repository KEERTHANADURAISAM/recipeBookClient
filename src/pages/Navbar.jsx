import React from 'react'
import { Nav } from 'react-bootstrap'
import Login from './Login'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <Nav fill variant="tabs" defaultActiveKey="/home" className='sticky-top nav'>
        <Nav.Item>
          <Link to={'/portal/home'}>Create Recipe</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={'/portal/myrecipes'}>My Recipes</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">User Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          
            Logout
          
        </Nav.Item>
      </Nav>
      {/* <h1>Welcome to Recipe app Please Login</h1> */}
      <Outlet/>
      </>
  )
}

export default Navbar