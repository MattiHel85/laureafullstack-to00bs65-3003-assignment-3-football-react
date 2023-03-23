import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';



function SearchFunction() {
    const [searchQuery, setSearchQuery ] = useState();

    const searchFunction = () => {
        console.log(searchQuery)
    }
    return (
      <>
          <Container className="py-5 d-flex justify-content-center">
              <Form style={{width: "75%"}}>
                  <InputGroup size="md" className="my-3">
                      <InputGroup.Text onClick={searchFunction}>Search</InputGroup.Text>
                          <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              onChange={(e) => setSearchQuery(e.target.value)}
                          />
                  </InputGroup>
              </Form>
          </Container>

      </>
    )
}

export default SearchFunction