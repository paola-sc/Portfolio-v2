import React from 'react';
import Modal from 'react-bootstrap/Modal';
import MEvideo from "../videos/metrics-page-video.mp4"

export const Modal2 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Body>
        <div className='d-flex justify-content-end'>
          <div onClick={props.onHide} className="cursor"><i className="fa-solid fa-xmark fa-3x mt-1 me-3"></i></div>
        </div>

        <div className="text-center">
          <div className='p-0'>
            <h1 className='mb-3'>
              Metrics
            </h1>
            <h3 className='m-0 fs-3 fw-light'>
              Made with: React, bootstrap, Chart.js
            </h3>
          </div>

          <div className="mx-1 m-lg-4 mx-lg-5">
            <video height="360" controls>
              <source src={MEvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='mx-3 my-2 d-flex inline-flex justify-content-around'>
            <a
              href="https://github.com/paola-codes/Metrics"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 className="">
                <i className="fa-brands fa-github fs-4 me-2" />
                GitHub repo
              </h3>
            </a>
            <a
              href="https://metrics-page.netlify.app"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 className="">
                <i className="fas fa-play fs-6 me-2" />
                Try it out!
              </h3>
            </a>
          </div>
        </div>
      </Modal.Body >
    </Modal >
  );
}
