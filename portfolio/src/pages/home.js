import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./home.css" 

export const Home = () => {
    return (
        <div className="">
            {/*Navbar*/}
            <Navbar style={{ backgroundColor: "#1c1d1f" }} sticky="top" expand="lg" variant="dark">
                <Container fluid className="mx-3 my-1 pt-1">
                    <Navbar.Brand>
                        <a href="#home" className="text-decoration-none text-white">
                            <h2>Paola Sanchez</h2>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white">
                        <Nav className="ms-auto fs-5">
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

            {/*Hero Section*/}
            <div
                className="p-5 text-start bg-image mb-5 myBg" id="home"
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h1 className="mb-3">
                            Ventanas con doble vidrio herméticas, hechas a medida para tu
                            negocio
                        </h1>
                        <h4 className="mb-3">
                            WindowArtisansVE trae una solución al problema de ventanas con
                            doble vidrio de tamaño estándar, difíciles de mantener y de
                            instalar.
                        </h4>
                        <a class="btn btn-dark text-white p-3 fs-5" href="#portfolio" role="button">Check my portfolio</a>
                    </div>
                </div>
            </div>

            {/*About Section*/}
            <div className="m-5" id="about">
                <h2 className="mb-4">
                    About Me
                    <hr className="featurette-divider mt-3" />
                </h2>
                <div className="row">
                    <div className="col my-3">
                        <h4>
                            Somos una empresa localizada en Guarenas, Venezuela, liderada por un
                            ingeniero civil con más de 40 años de experiencia en planeación y
                            contrucción de plantas farmaéeuticas en Venezuela.
                        </h4>
                        <br />
                        <h4>
                            Nos dimos cuenta del problema en el mercado de ventanas herméticas
                            con doble vidrio; todas son del mismo tamaño, y son difíciles de
                            mantener e instalar.
                        </h4>
                        <br />
                        <h4>
                            Por ello, creamos una ventana que cumple todas las funciones de la
                            original, pero resuelve muchos dolores de cabeza con mejor
                            tecnología y tomando en consideración los requerimientos de cada
                            empresa.
                        </h4>
                    </div>
                </div>
            </div>

            {/*Portfolio Section*/}
            <div className="m-5" id="portfolio">
                <h2 className="mb-4">
                    Portfolio
                    <hr className="featurette-divider mt-3" />
                </h2>
                <div className="row">
                    <div class="card-deck my-3">
                        <div class="card mb-4">
                            <img class="card-img-top" src="..." alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card mb-4" >
                            <img class="card-img-top" src="..." alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <img class="card-img-top" src="..." alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Contact Section*/}
            <div className="m-5" id="contact">
                <h2 className="mb-4">
                    <i className="fa-solid fa-envelope fs-3 me-2 mb-2" />
                    Contact Me
                    <hr className="featurette-divider mt-3" />
                </h2>
                <div className="col my-3">
                    <div className="mb-3 fs-4">
                        <label for="exampleFormControlInput1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="nice.to.meet.you@gmail.com"
                        />
                    </div>
                    <div className="mb-4 fs-4">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Message{" "}
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="6"
                            placeholder="Thank for contacting me!"
                        ></textarea>
                    </div>
                    <div className="bg-dark col-xs-3 col-3 col-md-2 col-lg-2 col-xl-2 p-2 pt-3 text-center text-white">
                        <h5>Enviar</h5>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <MDBFooter style={{ backgroundColor: "#2b2c2e" }} className="text-white">
                <MDBContainer className="p-4">
                    <MDBRow>
                        <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                            <h3 className="">Paola Sanchez</h3>

                            <p>
                                Front-end developer
                            </p>
                        </MDBCol>

                        <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-1" style={{ marginBottom: "0px" }}>
                                Compañía
                            </h5>

                            <ul className="list-unstyled mb-1">
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-decoration-none text-white">
                                        Conócenos
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-1">Ventanas</h5>

                            <ul className="list-unstyled mb-1">
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Características
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Ventajas
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Proceso
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-1">Legal</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Política de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" className="text-decoration-none text-white">
                                        Términos y Condiciones
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className="text-center p-3" style={{ backgroundColor: "#1c1d1f" }}>
                    © 2022 Copyright:
                    <span className="text-white ps-2">WindowArtisansVE</span>
                </div>
            </MDBFooter>
        </div>
    );
};
