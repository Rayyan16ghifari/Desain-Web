import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from 'reactstrap';

const Contact = () => {
  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" sm="10" md="8" lg="6" xl="5">
            <Card className="shadow">
              <CardBody className="p-4">
                <h3 className="text-center mb-4">Hubungi Kami</h3>
                <Form>
                  <FormGroup>
                    <Label for="name">Nama</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="message">Pesan</Label>
                    <Input
                      type="textarea"
                      id="message"
                      rows="4"
                      placeholder="Tulis pesan Anda..."
                      required
                    />
                  </FormGroup>
                  <div className="text-center">
                    <Button color="primary" type="submit">
                      Kirim
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
