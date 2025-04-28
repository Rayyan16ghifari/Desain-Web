// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css'; // Pastikan jalur file CSS sudah sesuai


const Home = () => {
  return (
    <div className="bg-light py-5 min-vh-100">
      <Container className="text-center">
        <Row className="justify-content-center mb-5">
          <Col md="8">
            <h1 className="display-4 fw-bold mb-3">Selamat Datang di Website Saya</h1>
            <p className="lead mb-4">
              Saya adalah tim pengembang muda yang antusias dalam teknologi.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8" className="d-flex justify-content-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/06/08/47/wire-rack-1311161_1280.jpg"
              alt="Home Banner"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: '90%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
