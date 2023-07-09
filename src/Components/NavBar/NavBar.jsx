import React, { useContext, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './NavBar.css';

import { ThemeContext } from './ThemeProvider';


const NavBar = ({ books, setBooks, getBooksApi }) => {

  
  const myThemeContext = useContext(ThemeContext);
  const { theme , toggleTheme} = ThemeContext;
  console.log(theme);
 

  const [searchTerm, setSearchTerm] = useState("");
  
  const filterBooks = (e) => {

    e.preventDefault();

    const filterBooks = getBooksApi.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setBooks(filterBooks);
  };

  const handleResetSearchBar = (value) => {

    setSearchTerm(value.target.value);


    if (value === "") {
      filterBooks(value);
    }
  };



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='mx-0'>
        <Nav className="me-auto">
        <Nav.Link href="#">Epibooks</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={filterBooks}  >

          <Form.Control

            onChange={(e) => handleResetSearchBar(e)}
            type="text"
            placeholder="Search"
          />
          <Button className='ms-2' type='submit' variant="dark">Cerca</Button>
        </Form>

      </Container>
    </Navbar>
  );
}

export default NavBar;