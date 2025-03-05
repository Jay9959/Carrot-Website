import { CiLocationOn, CiMail } from 'react-icons/ci';
import './All.css'
import { IoCallOutline } from 'react-icons/io5';
import { FaDribbble, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { RiFacebookLine } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { Col, Row } from 'react-bootstrap';

// image import

import logo from "../image/logo.png"
import image1 from "../image/1.jpg"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"
import image4 from "../image/4.jpg"
import image5 from "../image/5.jpg"
import image6 from "../image/6.jpg"

const Footer = () => {
    return (
        <>
            <footer className='position-relative' style={{marginTop : '100px'}}>
                <div className="container">
                    <Row>
                        <Col>
                            <div className='cr-footer-border'>
                                <div className="footer-logo">
                                    <div className='footer-image'>
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <p className='footer-content'>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                                </div>
                                <div className="cr-footer">
                                    <ul className="cr-footer-links">
                                        <li className='location-icon position-relative'>
                                            <CiLocationOn className='footerlocation' />
                                            51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                        </li>
                                        <li className='mail-icon position-relative'>
                                            <CiMail className='footermail' />
                                            <a href="javascript:void(0)">example@email.com</a>
                                        </li>
                                        <li className='call-icon position-relative'>
                                            <IoCallOutline className='footercall' />
                                            <a href="javascript:void(0)"> +91 123 4567890</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="cr-footer cr-footer-border">
                                <h4 className="cr-sub-title fw-bold">Company</h4>
                                <ul className='cr-footer-links'>
                                    <li>
                                        <a href="javascript:void(0)">About Us</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Delivery Information</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">contact Us</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Support Center</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col>
                            <div className="cr-footer cr-footer-border">
                                <h4 className="cr-sub-title fw-bold">Category</h4>
                                <ul className='cr-footer-links'>
                                    <li>
                                        <a href="javascript:void(0)">Dairy & Bakery</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Fruits & Vegetable</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Snack & Spice</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Juice & Drinks</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Chicken & Meat</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Fast Food</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col>
                            <div className="cr-footer cr-footer-border">
                                <h4 className='cr-sub-title fw-bold'>Subscribe Our Newsletter</h4>
                                <div className='cr-footer-links'>
                                    <form className='cr-search-footer'>
                                        <input type="text" placeholder='search here...' />
                                        <a href="javascript:void(0)" className='search-btn d-flex align-items-center justify-content-center'>
                                            <FaPaperPlane className='plane' />
                                        </a>
                                    </form>
                                </div>
                                <div className="cr-social-media d-flex flex-row">
                                    <span>
                                        <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'>
                                            <RiFacebookLine />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'>
                                            <FaXTwitter />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'>
                                            <FaDribbble />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'>
                                            <FaInstagram />
                                        </a>
                                    </span>
                                </div>

                                <div>
                                    <div className="insta mx-auto position-relative overflow-hidden p-0 z-1">
                                        <div className='position-relative z-1 d-flex'>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image1} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image2} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image3} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image4} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image5} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="javascript:void(0)" className='position-relative d-flex'>
                                                    <img src={image6} alt="" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </footer>
        </>
    )
}

export default Footer;