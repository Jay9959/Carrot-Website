import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";

// image import

import Styl5 from "../image/Styl5.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"
import Styl6 from "../image/Styl6.jpg"

const Style3 = () => {
    return (
        <>
            {/* STYLE START  */}
            <Container data-aos="fade-up" data-aos-duration="3000">
                <div className="text-center pt-5">
                    <h2 className="mb-3">Style 3</h2>
                    <p className="text-body-tertiary w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                </div>
                <Row>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Styl5} className="border rounded-3" />
                            <Card.Body className="text-center">
                                <span>Organic fresh lemon</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2 text-secondary">Lorem ipsum dolor impicit  adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $145
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Styl2} className="border rounded-3" />
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2 text-secondary">Lorem ipsum dolor impicit  adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Styl3} className="border rounded-3" />
                            <Card.Body className="text-center">
                                <span>Organic fresh venila farm 5kg</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2 text-secondary">Lorem ipsum dolor impicit  adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $50.30
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$72.60</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Styl6} className="border rounded-3" />
                            <Card.Body className="text-center">
                                <span>Organic fresh venila farm 5kg</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2 text-secondary">Lorem ipsum dolor impicit  adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $50.30
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$72.60</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* STYLE END  */}
        </>
    )
}

export default Style3;