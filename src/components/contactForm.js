import React, { useRef, useState, setShow } from "react";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";

export const ContactForm = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_portfolio",
                form.current,
                "user_40gT501S2nuqnbm1EYjzt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
                form.current.reset()
            );
    };

    return (
        <form className="col-11 mx-auto my-3" ref={form} onSubmit={sendEmail}>
            <div className="mb-3 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-3">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                />
            </div>
            <div className="mb-3 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-3">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="nice.to.meet.you@gmail.com"
                />
            </div>
            <div className="mb-4 fs-4">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label fs-3"
                >
                    Message
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Thank you for contacting me!"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-dark py-2 px-3 fs-4"
                onClick={handleShow}
            >
                Send
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                className="text-center"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="p-2">
                            Thank you for your message!
                        </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="p-3">
                        I will try to respond as soon as I can.
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="p-2 px-4" onClick={handleClose}>
                        <h4 className="m-0">Close</h4>
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};