import { Container, Carousel, Row, Col } from "react-bootstrap";

// image import 

import NewsCarousel1 from "../image/NewsCarousel1.jpg"
import NewsCarousel2 from "../image/NewsCarousel2.jpg"
import NewsCarousel3 from "../image/NewsCarousel3.jpg"
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const NewsCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            <section className='section-blog pb-100 position-relative'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className='mb-30'>
                                <div className="cr-banner">
                                    <h2>Latest News</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={NewsCarousel3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
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

export default NewsCarousel;
