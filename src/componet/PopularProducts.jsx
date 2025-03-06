import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import { FaArrowRight, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

// image import 

import Styl1 from "../image/Styl1.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"
import Styl4 from "../image/Styl4.jpg"
import Styl5 from "../image/Styl5.jpg"
import image17 from "../image/17.jpg"
import productbanner from "../image/product-banner.jpg"
import image11 from "../image/11.jpg"

const PopularProducts = () => {
    return (
        <>
            \<section className='section-popular-product-shape pb-100 position-relative'>
                <Container className='container aos-init aos-animate'>
                    <Row>
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className='product-content mb-minus-24'>
                        <Tab.Container defaultActiveKey="all">
                            <Row>
                                <Col xl={3} lg={6} sm={4} xs={12} className='mb-24'>
                                    <div className="row mb-minus-24 position-sticky">

                                        <Col lg={12} sm={12} xs={12} className='cr-product-box mb-24'>
                                            <div className='cr-product-tabs'>
                                                <Nav variant="pills" className="flex-column nav nav-tabs">
                                                    <Nav.Item className='nav-item'>
                                                        <Nav.Link eventKey="all" className='nav-link active center-categories-inner' aria-selected="true" tabIndex={"0"}>All <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="snack" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Snack <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="vegetable" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Vegetable <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="fruit" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Fruit <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="bakery" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Bakery <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                        </Col>

                                        <Col lg={12} sm={12} xs={12} className='cr-product-box banner-480 mb-24'>
                                            <div className='cr-ice-cubes'>
                                                <img src={productbanner} />
                                                <div className='cr-ice-cubes-contain'>
                                                    <h4 className="title">Juicy </h4>
                                                    <h5 className="sub-title">Fruits</h5>
                                                    <span>100% Natural</span>
                                                    <button className='cr-button'>Shop Now</button>
                                                </div>
                                            </div>
                                        </Col>

                                    </div>
                                </Col>
                                <Col xl={9} lg={6} sm={8} xs={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 vegetable'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={Styl5} alt="card5" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Vegetables</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic villa farm lomon 500gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
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
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$145</span>
                                                                <span className="old-price">$150</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 fruit'>
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
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image17} alt="card7" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image11} alt="card8" className='img d-block m-auto' />
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
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 fruit'>
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
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(3.2)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$50.30</span>
                                                                <span className="old-price">$72.60</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={Styl4} alt="card4" className='img d-block m-auto' />
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
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image17} alt="card7" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="snack">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 snack'>
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
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$145</span>
                                                                <span className="old-price">$150</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image11} alt="card8" className='img d-block m-auto' />
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
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={Styl4} alt="card4" className='img d-block m-auto' />
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
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vegetable">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 vegetable'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={Styl5} alt="card5" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Vegetables</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic villa farm lomon 500gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fruit">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 fruit'>
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
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={3} className='mb-24 fruit'>
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
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(3.2)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$50.30</span>
                                                                <span className="old-price">$72.60</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="bakery">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image17} alt="card7" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={image17} alt="card7" className='img d-block m-auto' />
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
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PopularProducts;
