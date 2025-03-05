import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";

// image import 

import Styl1 from "../image/Styl1.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"

const Wishlist = () => {
    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="2000" className="mt-5">
                    <Row>
                        <Col>
                            <Card className="p-3" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src={Styl1} className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src={Styl2} className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src={Styl3} className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src={Styl2} className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Wishlist;