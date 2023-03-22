import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchFunction() {
  return (
    <>
        <Form className="d-xs-block-flex d-md-inline-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline" className='custom-btn-light'>Search</Button>
        </Form>
    </>
  )
}

export default SearchFunction