import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import work1 from "./work-1.jpg";
const Portfollio = () => {
  return (
    <div>
      {/* <div className="container">
        <h2>Our Portfolio</h2>
        <div className="row g-4">
          <Card className="col-sm-4">
            <CardImg top src="project1.png" alt="Project 1" />
            <CardBody>
              <CardTitle>Project 1: Website Design and Development</CardTitle>
              <CardText>Description of Project 1.</CardText>
            </CardBody>
          </Card>

          <Card className="col-sm-4">
            <CardImg top src="project2.png" alt="Project 2" />
            <CardBody>
              <CardTitle>Project 2: Mobile App Development</CardTitle>
              <CardText>Description of Project 2.</CardText>
            </CardBody>
          </Card>

          <Card className="col-sm-4">
            <CardImg top src="project3.png" alt="Project 3" />
            <CardBody>
              <CardTitle>Project 3: Software Development</CardTitle>
              <CardText>Description of Project 3.</CardText>
            </CardBody>
          </Card>
          <Card className="col-sm-4">
            <CardImg top src="project1.png" alt="Project 1" />
            <CardBody>
              <CardTitle>Project 1: Website Design and Development</CardTitle>
              <CardText>Description of Project 1.</CardText>
            </CardBody>
          </Card>

          <Card className="col-sm-4">
            <CardImg top src="project2.png" alt="Project 2" />
            <CardBody>
              <CardTitle>Project 2: Mobile App Development</CardTitle>
              <CardText>Description of Project 2.</CardText>
            </CardBody>
          </Card>

          <Card className="col-sm-4">
            <CardImg top src="project3.png" alt="Project 3" />
            <CardBody>
              <CardTitle>Project 3: Software Development</CardTitle>
              <CardText>Description of Project 3.</CardText>
            </CardBody>
          </Card>
        </div>
      </div> */}
      <div className="container">
        <h2>Our Portfolio</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 1" />
              <CardBody>
                <CardTitle>Project 1: Website Design and Development</CardTitle>
                <CardText>Description of Project 1.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 2" />
              <CardBody>
                <CardTitle>Project 2: Mobile App Development</CardTitle>
                <CardText>Description of Project 2.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 3" />
              <CardBody>
                <CardTitle>Project 3: Software Development</CardTitle>
                <CardText>Description of Project 3.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 1" />
              <CardBody>
                <CardTitle>Project 1: Website Design and Development</CardTitle>
                <CardText>Description of Project 1.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 2" />
              <CardBody>
                <CardTitle>Project 2: Mobile App Development</CardTitle>
                <CardText>Description of Project 2.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top src={work1} alt="Project 3" />
              <CardBody>
                <CardTitle>Project 3: Software Development</CardTitle>
                <CardText>Description of Project 3.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfollio;
