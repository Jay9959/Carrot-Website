import { Table, Container, Button, Row, Col, Card } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

// image import 

import Style1 from "../image/Styl1.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"
import Styl6 from "../image/Styl6.jpg"
import Styl5 from "../image/Styl5.jpg"
import dasdas from "../image/dasdas.jpg"

const Crat = () => {

    return (
        <Container>
            <div className="mt-5 table-content">
                <Table data-aos="fade-up" data-aos-duration="3000" className="w-100">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>price</th>
                            <th className="text-center">Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cart-name">
                                <a href="javascript:void(0)">
                                    <img src={Styl5} alt="" className="cart-img" />
                                    Organic Lemon
                                </a>
                            </td>
                            <td className="cart-price">
                                <span className="amount">$56.00</span>
                            </td>
                            <td className="cart-qty">
                                <div className="cart-qty-plus">
                                    <button type="button" className="plus">+</button>
                                    <input type="text" placeholder="." value="1" className="quantity"></input>
                                    <button type="button" className="minus">-</button>
                                </div>
                            </td>
                            <td className="cart-subtotal">$56.00</td>
                            <td className="cart-remove">
                                <a href="javacsript:void(0)">
                                    <RiDeleteBin5Line />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart-name">
                                <a href="javascript:void(0)">
                                    <img src={Styl2} alt="" className="cart-img" />
                                    Apple Juice
                                </a>
                            </td>
                            <td className="cart-price">
                                <span className="amount">$75.00</span>
                            </td>
                            <td className="cart-qty">
                                <div className="cart-qty-plus">
                                    <button type="button" className="plus">+</button>
                                    <input type="text" placeholder="." value="1" className="quantity"></input>
                                    <button type="button" className="minus">-</button>
                                </div>
                            </td>
                            <td className="cart-subtotal">$75.00</td>
                            <td className="cart-remove">
                                <a href="javacsript:void(0)">
                                    <RiDeleteBin5Line />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart-name">
                                <a href="javascript:void(0)">
                                    <img src={Styl3} alt="" className="cart-img" />
                                    Watermelon 5kg Pack
                                </a>
                            </td>
                            <td className="cart-price">
                                <span className="amount">$48.00</span>
                            </td>
                            <td className="cart-qty">
                                <div className="cart-qty-plus">
                                    <button type="button" className="plus">+</button>
                                    <input type="text" placeholder="." value="1" className="quantity"></input>
                                    <button type="button" className="minus">-</button>
                                </div>
                            </td>
                            <td className="cart-subtotal">$48.00</td>
                            <td className="cart-remove">
                                <a href="javacsript:void(0)">
                                    <RiDeleteBin5Line />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart-name">
                                <a href="javascript:void(0)">
                                    <img src={Styl6} alt="" className="cart-img" />
                                    Pomegranate 5 kg pack
                                </a>
                            </td>
                            <td className="cart-price">
                                <span className="amount">$90.00</span>
                            </td>
                            <td className="cart-qty">
                                <div className="cart-qty-plus">
                                    <button type="button" className="plus">+</button>
                                    <input type="text" placeholder="." value="1" className="quantity"></input>
                                    <button type="button" className="minus">-</button>
                                </div>
                            </td>
                            <td className="cart-subtotal">$90.00</td>
                            <td className="cart-remove">
                                <a href="javacsript:void(0)">
                                    <RiDeleteBin5Line />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart-name">
                                <a href="javascript:void(0)">
                                    <img src={dasdas} alt="" className="cart-img" />
                                    Organic Peach Fruits
                                </a>
                            </td>
                            <td className="cart-price">
                                <span className="amount">$50.00</span>
                            </td>
                            <td className="cart-qty">
                                <div className="cart-qty-plus">
                                    <button type="button" className="plus">+</button>
                                    <input type="text" placeholder="." value="1" className="quantity"></input>
                                    <button type="button" className="minus">-</button>
                                </div>
                            </td>
                            <td className="cart-subtotal">$50.00</td>
                            <td className="cart-remove">
                                <a href="javacsript:void(0)">
                                    <RiDeleteBin5Line />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <a href="javacsript:void(0)" className="text-decoration-underline">Continue Shopping</a>
                    <Button style={{ marginLeft: "92%" }}>Check Out</Button>
                </div>
                <Row data-aos="fade-up" data-aos-duration="2000">
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                            <div className="position-relative">
                                <Card.Img variant="top" src={Style1} className="border rounded-3" />
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
                        <Card className="p-3 mt-5" style={{ width: '15rem' }}>

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
                        <Card className="p-3 mt-5" style={{ width: '15rem' }}>

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
                        <Card className="p-3 mt-5" style={{ width: '15rem' }}>

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
                        <Card className="p-3 mt-5" style={{ width: '15rem' }}>

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
                </Row>
            </div>
        </Container>
    );
};

export default Crat;