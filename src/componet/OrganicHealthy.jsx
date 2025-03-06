import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";

// image import 

import Styl1 from "../image/Styl1.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"
import productsrightview from "../image/products-rightview.jpg"

const OrganicHealthy = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            <section className='section-popular pb-100 position-relative'>
                <Container>
                    <Row>

                        <div className='col-xxl-7 col-xl-6 col-lg-6 col-md-12'>
                            <div>
                                <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-wrapper'>
                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl1} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl2} alt="card2" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl3} alt="card3" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl1} alt="card1" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl2} alt="card4" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl3} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl1} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl2} alt="card2" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={Styl3} alt="card3" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>

                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-12 mt-5'>
                            <div className="cr-products-rightbar position-relative d-flex align-items-center">
                                <img src={productsrightview} width={"100%"} height={"150%"} />
                                <div className="cr-products-rightbar-content position-absolute end-0 top-0 bottom-0 d-flex flex-column justify-content-center">
                                    <h4 className='mb-0 text-end'>Organic & Healthy <br /> Vegetables</h4>
                                    <div className="cr-off d-flex justify-content-center">
                                        <span>25% <code>OFF</code></span>
                                    </div>
                                    <div className="rightbar-buttons d-flex justify-content-center">
                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default OrganicHealthy;
