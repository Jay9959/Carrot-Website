import { Carousel, Col, Container, Row } from "react-bootstrap";

// image import 

import ima12 from "../image/1 (2).jpg"
import TestimonialCarousel1 from "../image/TestimonialCarousel1.jpg"
import TestimonialCarousel2 from "../image/TestimonialCarouse2.jpg"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const TestimonialCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            <section className='section-testimonial position-relative mt-5'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className='mb-30'>
                                <div className="cr-banner">
                                    <h2>Great Words From People</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <div className="swiper-wrapper cr-testimonial-pt-50">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={ima12} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={ima12} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={TestimonialCarousel2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={ima12} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default TestimonialCarousel;
