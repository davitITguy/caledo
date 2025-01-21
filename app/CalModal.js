import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Close from '../public/close.svg';
import LeftArw from '../public/leftArwModal.svg';
import RightArw from '../public/rightArwModal.svg';

export default function CalModal(props) {
  const weekDays = [
    {
      day: 'ორშ',
      key: 1,
    },
    {
      day: 'სამ',
      key: 2,
    },
    {
      day: 'ოთხ',
      key: 3,
    },
    {
      day: 'ხუთ',
      key: 4,
    },
    {
      day: 'პარ',
      key: 5,
    },
    {
      day: 'შაბ',
      key: 6,
    },
    {
      day: 'კვ',
      key: 7,
    },
  ];

  const monthDates = [
    {
      date: 27,
      key: 1,
    },
    {
      date: 27,
      key: 2,
    },
    {
      date: 27,
      key: 3,
    },
    {
      date: 27,
      key: 4,
    },
    {
      date: 27,
      key: 5,
    },
    {
      date: 27,
      key: 6,
    },
    {
      date: 27,
      key: 7,
    },
    {
      date: 27,
      key: 8,
    },
    {
      date: 27,
      key: 9,
    },
    {
      date: 27,
      key: 10,
    },
    {
      date: 27,
      key: 11,
    },
    {
      date: 27,
      key: 12,
    },
    {
      date: 27,
      key: 13,
    },
    {
      date: 27,
      key: 14,
    },
    {
      date: 27,
      key: 15,
    },
    {
      date: 27,
      key: 16,
    },
    {
      date: 27,
      key: 17,
    },
    {
      date: 27,
      key: 18,
    },
    {
      date: 27,
      key: 19,
    },
    {
      date: 27,
      key: 20,
    },
    {
      date: 27,
      key: 21,
    },
    {
      date: 27,
      key: 22,
    },
    {
      date: 27,
      key: 23,
    },
    {
      date: 27,
      key: 24,
    },
    {
      date: 27,
      key: 25,
    },
    {
      date: 27,
      key: 26,
    },
    {
      date: 27,
      key: 27,
    },
    {
      date: 27,
      key: 28,
    },
    {
      date: 27,
      key: 29,
    },
    {
      date: 27,
      key: 30,
    },
    {
      date: 27,
      key: 31,
    },
    {
      date: 27,
      key: 32,
    },
    {
      date: 27,
      key: 33,
    },
    {
      date: 27,
      key: 34,
    },
    {
      date: 27,
      key: 35,
    },
  ];
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <style type="text/css">
        {`
    .btn-send {
      background-color: #7C1FD1;
      color: white;
      border-radius:15px;
      width:100%;
    }`}
      </style>
      <Container>
        <Row className="d-flex align-items-center justify-content-around ">
          <Col className="d-flex justify-start align-items-center">
            <p className="m-0 p-0">აირჩიე თარიღი</p>
          </Col>
          <Col className="d-flex justify-end align-items-center">
            <Image src={Close} width={50} height={50} alt="Close" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <hr></hr>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-around">
          <Col className="d-flex justify-start align-items-center">
            <Image src={LeftArw} width={24} height={105} alt="left arw" />
          </Col>
          <Col className="d-flex justify-center align-items-center ">
            <p className="m-0 p-0 whitespace-nowrap">ოქტომბერი 2024</p>
          </Col>
          <Col className="d-flex justify-end align-items-center">
            <Image src={RightArw} width={24} height={105} alt="right arw" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {weekDays.map((el) => (
            <Col
              className="d-flex justify-center align-items-center rounded-2xl max-w-10 max-h-12 px-1"
              key={el.key}
            >
              <p key={el.key}>{el.day}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          {monthDates.map((el) => (
            <Col
              className="d-flex justify-center align-items-center rounded-2xl max-w-10 max-h-12 px-3"
              key={el.key}
            >
              <p key={el.key}>{el.date}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Button className="text-title " variant="send">
              გაგრძელება
            </Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}
