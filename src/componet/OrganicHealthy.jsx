import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// image import 

import Style1 from "../image/Styl1.jpg"
import Styl2 from "../image/Styl2.jpg"
import Styl3 from "../image/Styl3.jpg"
import productsrightview from "../image/products-rightview.jpg"

const OrganicHealthy = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const products = [
        {
            title: "Best snacks with hazel nut mix pack 200gm",
            price: "$120.25",
            originalPrice: "$123.25",
            rating: "rating=5.0",
            image: {Style1},
            BiLogIn: "Snacks"
        },
        {
            title: "Sweet snacks crunchy nut mix 250gm pack",
            price: "$100.00",
            originalPrice: "$110.00",
            rating: "rating=4.5",
            image: {Styl2},
            BiLogIn: "Snacks"
        },
        {
            title: "Best snacks with hazel nut mix pack 200gm",
            price: "$120.25",
            originalPrice: "$123.25",
            rating: "rating=5.0",
            image: {Styl3},
            BiLogIn: "Snacks"
        },
    ];

    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
                    <Row>
                        <Col xs={12} md={7}>
                            <Slider {...settings}>
                                {products.map((product, index) => (
                                    <Card key={index} className="card-conatnt-img">
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title><p className="fs-6">{product.BiLogIn}</p></Card.Title>
                                            <Card.Title>{product.rating}</Card.Title>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                <span style={{ color: "green", fontWeight: "bold" }}>
                                                    {product.price}
                                                </span>{" "}
                                                <del>{product.originalPrice}</del>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Slider>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="position-relative">
                                <div className="organicHealthy-img">
                                    <img src={productsrightview} alt="" />
                                </div>
                                <div className="organicHealthy-contant">
                                    <h2 className="display-6 fw-bold">Organic & Healthy Vegetables</h2>
                                    <p>25%<span>OFF</span></p>
                                    <Button variant="success">Shop Now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default OrganicHealthy;
