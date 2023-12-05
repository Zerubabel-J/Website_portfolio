import React from "react";
import { Button } from "reactstrap";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
// Col,
// Row,
// CardSubtitle,
// CardText,
// Container
import workImage from "./work-1.jpg";
const Bugfix = () => {
  return (
    <>
      <Card className="work-box">
        <a
          href={workImage}
          data-gallery="portfolioGallery"
          className="portfolio-lightbox"
        >
          <div className="work-img">
            <CardImg src={workImage} alt="" className="img-fluid" />
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
                <span className="w-date">18 Dec-2022</span>
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">E-commerce</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">18 Dec-2022</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Learning Management System</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Development</span> /{" "}
                      <span className="w-date">18 Sep. 2021</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">BookingApp</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web development</span> /{" "}
                      <span className="w-date">18 Sep. 2023</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Smart Home</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Embedded System</span> /{" "}
                      <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">
                      Alcohol Detection & Car Tracking System
                    </h2>
                    <div className="w-more">
                      <span className="w-ctegory">Embedded System</span> /{" "}
                      <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href={workImage}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
              >
                <div className="work-img">
                  <img src={workImage} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Data Center Risk Analysis</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Cyber Security</span> /{" "}
                      <span className="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html">
                        {" "}
                        <span className="bi bi-plus-circle"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bugfix;
