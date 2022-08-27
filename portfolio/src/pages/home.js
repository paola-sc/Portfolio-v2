import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./home.css"
import { ContactForm } from '../components/contactForm';
import { Modal1 } from '../components/modal1';
import { Modal2 } from '../components/modal2';
import { Modal3 } from '../components/modal3';
import Tiktok from "../images/tiktok.png";
import Plus from "../images/plus-sign.png";
import Phone from "../images/phone2.png";

export const Home = () => {

    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);

    return (
        <div className="">

            {/* Navbar Starts */}
            <Navbar style={{ backgroundColor: "#1c1d1f" }} sticky="top" expand="lg" variant="dark">
                <Container fluid className="mx-3 my-1 pt-1">
                    <Navbar.Brand>
                        <a href="#home" className="text-decoration-none text-white">
                            <h2>Paola Sanchez</h2>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white">
                        <Nav className="ms-auto fs-4">
                            <a href="#about" className="text-decoration-none text-white me-4">
                                <Nav.Item>About</Nav.Item>
                            </a>
                            <a
                                href="#portfolio"
                                className="text-decoration-none text-white me-4"
                            >
                                <Nav.Item>Portfolio</Nav.Item>
                            </a>
                            <a href="#contact" className="text-decoration-none text-white me-4">
                                <Nav.Item>Contact</Nav.Item>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Navbar Ends */}

            {/* Hero Section Starts */}
            <div
                className="p-4 text-start bg-image mb-5 heroBg" id="home"
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">

                        {/* Hero Text */}
                        <h1 className="mb-3">
                            Welcome to my page!
                        </h1>
                        <h3 className="mb-5">
                            My name is Paola, I am front-end developer based in Florida, US.
                        </h3>

                        {/* Call to Action */}
                        <a className="btn btn-dark text-white px-3 pt-3" href="#portfolio" role="button"><h4>Check my portfolio</h4></a>
                    </div>
                </div>
            </div>
            {/*Hero Section Ends */}

            {/*About Section Starts */}
            <div className="m-5" id="about">
                {/* Header */}
                <div className='col-3 mx-auto text-center'>
                    <h2 className="mb-4">
                        <i className="fa-solid fa-user fs-3 me-3 mb-2" />
                        About Me
                        <hr className="featurette-divider mt-3" />
                    </h2>
                </div>

                {/* About Me Content */}
                <div className="row">
                    <div className="col-11 my-3 mx-auto">
                        <h4>
                            I am a front-end developer who is constantly learning new skills
                            and is very fond of JavaScript and React.
                        </h4>
                        <br />
                        <h4>
                            Back in 2016, I came to the United States from Venezuela, and
                            I am eternally grateful for what this country has given me
                            and allowed me to achieve.
                        </h4>
                        <br />
                        <h4>
                            I am working on becoming a great front-end developer, and
                            I hope to inspire more immigrant women like me to join the
                            tech industry!
                        </h4>
                    </div>
                </div>
            </div>
            {/*About Section Ends */}

            {/* Portfolio Section Starts */}
            <div className="m-5" id="portfolio">
                {/* Header */}
                <div className='col-3 mx-auto text-center'>
                    <h2 className="mb-4">
                        <i className="fa-solid fa-laptop fs-3 me-3 mb-2" />
                        Portfolio
                        <hr className="featurette-divider mt-3" />
                    </h2>
                </div>

                {/* Modals */}
                <Modal1
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                />
                <Modal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />
                <Modal3
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                />

                {/* Projects */}
                <div className='row justify-content-center flex-wrap'>
                    <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
                        <div className='mx-auto'>
                            <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                                <img className="img-fluid image" src={Phone} alt="Thumbnail of the roadbros project" />
                                <div class="overlay" onClick={() => setModalShow1(true)} >
                                    <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                                        <img src={Plus} width={100} alt="Thumbnail of the roadbros project" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
                        <div className='mx-auto'>
                            <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                                <img className="img-fluid image" src={Phone} />
                                <div class="overlay" onClick={() => setModalShow2(true)}>
                                    <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                                        <img src={Plus} width={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
                        <div className='mx-auto'>
                            <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                                <img className="img-fluid image" src={Phone} />
                                <div class="overlay" onClick={() => setModalShow3(true)} >
                                    <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                                        <img src={Plus} width={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Section Ends */}

            {/* Contact Section Starts */}
            <div className="m-5" id="contact">
                {/* Header */}
                <div className='col-3 mx-auto text-center'>
                    <h2 className="mb-4">
                        <i className="fa-solid fa-envelope fs-3 me-3 mb-2" />
                        Contact Me
                        <hr className="featurette-divider mt-3" />
                    </h2>
                </div>

                {/* Contact Form */}
                <ContactForm />
            </div>
            {/* Contact Section Ends */}

            {/* Footer Starts */}
            <MDBFooter style={{ backgroundColor: "#2b2c2e" }} className="text-white text-center">
                <MDBContainer className="p-4">
                    <MDBRow>
                        <MDBCol lg="6" md="12">
                            <h3>Paola Sanchez</h3>
                            <h5>Front-end developer</h5>
                        </MDBCol>

                        <MDBCol lg="6" md="12" className="mt-4 mb-3">
                            <a
                                href="www.linkedin.com/in/paola-sanchez98"
                                style={{ textDecoration: "none" }}
                            >
                                <span className="text-white">
                                    <i className="fab fa-linkedin-in fs-4 me-3" />
                                </span>
                            </a>

                            <a
                                href="https://github.com/paola-codes"
                                style={{ textDecoration: "none" }}
                            >
                                <span className="text-white">
                                    <i className="fab fa-github fs-4 me-3" />
                                </span>
                            </a>

                            <a
                                href="https://www.instagram.com/paola_codes/"
                                style={{ textDecoration: "none" }}
                            >
                                <span className="text-white">
                                    <i className="fab fa-instagram fs-4 me-3" />
                                </span>
                            </a>

                            <a
                                href="https://www.tiktok.com/@paola_codes"
                                style={{ textDecoration: "none" }}
                            >
                                <span className="text-white">
                                    <img src={Tiktok} width={20} className="mb-2" />
                                </span>
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className="text-center p-3" style={{ backgroundColor: "#1c1d1f" }}>
                    © 2022 Copyright:
                    <span className="text-white ps-2">Paola Sanchez</span>
                </div>
            </MDBFooter>
            {/* Footer Ends */}
        </div >
    );
};
