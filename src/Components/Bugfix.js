import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
const Bugfix = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Button color="primary">Primary Button</Button>
          </Col>
          <Col xs={6}>
            <Button color="success" className="">
              Secondary Button
            </Button>
          </Col>
        </Row>
      </Container>
      <a className="bg-info btn rounded m-5">Click me</a>
    </div>
  );
};

export default Bugfix;
