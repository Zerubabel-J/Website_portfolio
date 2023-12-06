import React from "react";

import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";
// CardText,
// Col,
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
        <Row xs={1} md={2} lg={3} className="g-3">
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button href="portfolio-details.html">
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button href="portfolio-details.html">
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button href="portfolio-details.html">
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button
                        href="portfolio-details.html"
                        color="info"
                        className="text-white"
                      >
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button href="portfolio-details.html">
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="work-box ">
              <a
                href={work1}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <CardImg src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <CardBody className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <CardTitle tag="h2" className="w-title">
                      E-commerce
                    </CardTitle>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">05 Dec-2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <Button href="portfolio-details.html">
                        <span className="bi bi-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfollio;
