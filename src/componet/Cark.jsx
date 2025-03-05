import { Tab, Nav, Row, Col, Card, Container, Button } from "react-bootstrap";

// image import

import cark1 from "../image/cark1.jpg"
import cark2 from "../image/cark2.jpg"
import mest1 from "../image/mest1.jpg"
import mest2 from "../image/mest2.jpg"
import vegetables1 from "../image/vegetables1.jpg"
import vegetables2 from "../image/vegetables2.jpg"
import apple1 from "../image/apple1.jpg"
import apple2 from "../image/apple2.jpg"
import strawberry1 from "../image/strawberry1.jpg"
import strawberry2 from "../image/strawberry2.jpg"

const Cark = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Tab.Container defaultActiveKey="cake-milk">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column nav-link-cards">
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="cake-milk">Cake & Milk <br/> <span className="nav-link-card-span">(65 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="fresh-meat">Fresh Meat <br/> <span className="nav-link-card-span">(30 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="vegetables">Vegetables <br/> <span className="nav-link-card-span">(25 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="apple-mango">Apple & Mango <br/> <span className="nav-link-card-span">(45 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="strawberry">Strawberry <br/> <span className="nav-link-card-span">(68 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card">
                                            View More
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="cake-milk">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={cark1}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={cark2}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fresh-meat">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={mest1}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={mest2}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="vegetables">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={vegetables1}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={vegetables2}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="apple-mango">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={apple1}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={apple2}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="strawberry">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={strawberry1}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src={strawberry2}
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
}

export default Cark;
