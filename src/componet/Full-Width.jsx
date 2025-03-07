import { Button, Card, Container, Row } from "react-bootstrap"

// image import 

import bolg1 from "../image/blog-1.jpg"
import bolg2 from "../image/blog-2.jpg"
import bolg3 from "../image/blog-3.jpg"

const FullWidth = () => {
    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="2000" className="mt-5">
                    <Row>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg1}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg2}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg2}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg3}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg3}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card className="border-1">
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
                                    src={bolg1}
                                    alt="Organic Dish"
                                />
                            </Card>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default FullWidth