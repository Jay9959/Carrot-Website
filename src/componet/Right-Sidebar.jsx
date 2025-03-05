import { Button, Card, Container, Form, Row } from "react-bootstrap"

// image import 

import blog1 from "../image/blog-1.jpg"
import blog2 from "../image/blog-2.jpg"
import blog3 from "../image/blog-3.jpg"
import NewsCarousel2 from "../image/NewsCarousel2.jpg"
import image1 from "../image/1.jpg"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"
import image4 from "../image/4.jpg"
import image5 from "../image/5.jpg"
import image6 from "../image/6.jpg"

const RightSidebar = () => {
    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="2000" className="mt-5">
                    <Row>
                        <div className="col-lg-9">
                            <div className="border mb-4">
                                <Card className="border-0">
                                    <Card.Body>
                                        <span className="text-success mb-1">By AdminC <code style={{ color: "#7a7a7a" }}> / 07 comments</code></span>
                                        <h4 className="mt-2 fs-4 fw-bold">
                                            Best guide to Shopping for Organic ingredients.
                                        </h4>
                                        <p className="text-muted text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                                            alias odit cupiditate harum magnam tenetur inventore dicta<br />
                                            voluptatum perferendis voluptate!
                                        </p>
                                        <Button variant="link" className="text-decoration-none p-0 text-success fw-semibold">
                                            READ MORE →
                                        </Button>
                                    </Card.Body>
                                    <Card.Img
                                        variant="top"
                                        src={blog1}
                                        alt="Organic Dish"
                                    />
                                </Card>
                            </div>
                            <div className="border mb-4">
                                <Card className="border-0">
                                    <Card.Body>
                                        <span className="text-success mb-1">By AdminC <code style={{ color: "#7a7a7a" }}> / 07 comments</code></span>
                                        <h4 className="mt-2 fs-4 fw-bold">
                                            Best guide to Shopping for Organic ingredients.
                                        </h4>
                                        <p className="text-muted text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                                            alias odit cupiditate harum magnam tenetur inventore dicta<br />
                                            voluptatum perferendis voluptate!
                                        </p>
                                        <Button variant="link" className="text-decoration-none p-0 text-success fw-semibold">
                                            READ MORE →
                                        </Button>
                                    </Card.Body>
                                    <Card.Img
                                        variant="top"
                                        src={blog2}
                                        alt="Organic Dish"
                                    />
                                </Card>
                            </div>
                            <div className="border mb-4">
                                <Card className="border-0">
                                    <Card.Body>
                                        <span className="text-success mb-1">By AdminC <code style={{ color: "#7a7a7a" }}> / 07 comments</code></span>
                                        <h4 className="mt-2 fs-4 fw-bold">
                                            Best guide to Shopping for Organic ingredients.
                                        </h4>
                                        <p className="text-muted text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                                            alias odit cupiditate harum magnam tenetur inventore dicta<br />
                                            voluptatum perferendis voluptate!
                                        </p>
                                        <Button variant="link" className="text-decoration-none p-0 text-success fw-semibold">
                                            READ MORE →
                                        </Button>
                                    </Card.Body>
                                    <Card.Img
                                        variant="top"
                                        src={blog3}
                                        alt="Organic Dish"
                                    />
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-3 flex">
                            <Form className="d-flex my-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                                <Button className="btn btn-success" type="submit">Search</Button>
                            </Form>
                            <h4 className="fs-5">Category</h4>
                            <div className="headering">
                                <ul>
                                    <li>
                                        Milks & Dairies
                                        <span>(12)</span>
                                    </li>
                                    <li>
                                        Sea Food
                                        <span>(09)</span>
                                    </li>
                                    <li>
                                        Fresh Fruit
                                        <span>(65)</span>
                                    </li>
                                    <li>
                                        Pet Food
                                        <span>(45)</span>
                                    </li>
                                    <li>
                                        Meat Food
                                        <span>(34)</span>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="fs-5">Recent Post</h4>
                            <div className="my-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={NewsCarousel2} />
                                    <Card.Body className="text-center">
                                        <span className="text-success">Sep 09, 2024</span>
                                        <p className="fw-bold mb-0">10 Tasty Organic Fruit choose</p>
                                        <Card.Text className="text-secondary">
                                            Lorem ipsum dolor consectetur adipisicing elit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <h4 className="fs-5">Latest Gallery</h4>
                            <div className="my-3 header-img">
                                <a href="javascript:void(0)"><img src={image1} alt="" /></a>
                                <a href="javascript:void(0)"><img src={image2} alt="" /></a>
                                <a href="javascript:void(0)"><img src={image3} alt="" /></a>
                                <a href="javascript:void(0)"><img src={image4} alt="" /></a>
                                <a href="javascript:void(0)"><img src={image5} alt="" /></a>
                                <a href="javascript:void(0)"><img src={image6} alt="" /></a>
                            </div>
                            <h4 className="fs-5">Popular Tags</h4>
                            <div className="vegetables mb-4 ms-3">
                                <Button>Vegetables</Button>
                                <Button>Juice</Button><br />
                                <Button>Meat Food</Button>
                                <Button>Cabbage</Button>
                                <Button>Organic Food</Button>
                                <Button>Juice</Button>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default RightSidebar