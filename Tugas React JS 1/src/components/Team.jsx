// src/components/Team.jsx
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const teamMembers = [
  {
    name: 'Ahmad',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Ahmad fokus pada pengembangan UI dengan React.'
  },
  {
    name: 'Siti',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Siti mengelola API dan integrasi server.'
  },
  {
    name: 'Budi',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    bio: 'Budi mendesain antarmuka pengguna yang ramah.'
  }
];

const Team = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md="4" key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <CardImg top src={member.image} alt={member.name} />
              <CardBody>
                <CardTitle tag="h5">{member.name}</CardTitle>
                <CardText><strong>{member.role}</strong></CardText>
                <CardText>{member.bio}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
