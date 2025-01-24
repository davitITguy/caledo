'use client';

import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CalImg2 from '../public/smallCal2.svg';
import Range from '../public/range.svg';
import BackArw from '../public/backArrow.svg';
import Logo from '../public/Caledologo.svg';
import Close from '../public/close.svg';
import MobileHeader from '../public/mobileHeader.svg';
import MobileFooter from '../public/mobileFooter.svg';
import Activities from '../public/activities.svg';
import HomeImg from '../public/home.svg';
import Profile from '../public/profile.svg';
import { useState } from 'react';
import React from 'react';
import CalModal from './CalModal';

export default function Home() {
  const date = [
    {
      key: 0,
      day: 'ორშ',
      date: '18',
      childkey1: 'c1',
      childkey2: 'cc1',
    },
    {
      key: 1,
      day: 'სამ',
      date: '18',
      childkey1: 'c2',
      childkey2: 'cc2',
    },
    {
      key: 2,
      day: 'ოთხ',
      date: '18',
      childkey1: 'c3',
      childkey2: 'cc3',
    },
    {
      key: 3,
      day: 'ხუთ',
      date: '18',
      childkey1: 'c4',
      childkey2: 'cc4',
    },
    {
      key: 4,
      day: 'პარ',
      date: '18',
      childkey1: 'c5',
      childkey2: 'cc5',
    },
    {
      key: 5,
      day: 'შაბ',
      date: '18',
      childkey1: 'c6',
      childkey2: 'cc6',
    },
  ];
  const [activeDate, setActiveDate] = useState(null)
  
  const hours = [
    {
      key: 1,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c1',
      childkey2: 'cc1',
    },
    {
      key: 2,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c2',
      childkey2: 'cc2',
    },
    {
      key: 3,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c3',
      childkey2: 'cc3',
    },
    {
      key: 4,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c4',
      childkey2: 'cc4',
    },
    {
      key: 5,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c5',
      childkey2: 'cc5',
    },
    {
      key: 6,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c6',
      childkey2: 'cc6',
    },
    {
      key: 7,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c7',
      childkey2: 'cc7',
    },
    {
      key: 8,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c8',
      childkey2: 'cc8',
    },
    {
      key: 9,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c9',
      childkey2: 'cc9',
    },
    {
      key: 10,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c10',
      childkey2: 'cc10',
    },
    {
      key: 11,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c11',
      childkey2: 'cc11',
    },
    {
      key: 12,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c12',
      childkey2: 'cc12',
    },
    {
      key: 13,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c13',
      childkey2: 'cc13',
    },
    {
      key: 14,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c14',
      childkey2: 'cc14',
    },
    {
      key: 15,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c15',
      childkey2: 'cc15',
    },
    {
      key: 16,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c16',
      childkey2: 'cc16',
    },
    {
      key: 17,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c17',
      childkey2: 'cc17',
    },
    {
      key: 18,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c18',
      childkey2: 'cc18',
    },
    {
      key: 19,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c19',
      childkey2: 'cc19',
    },
    {
      key: 20,
      hour: '10:00',
      date: '04/04',
      childkey1: 'c20',
      childkey2: 'cc20',
    },
  ];
  const [activeHours, setActiveHours] = useState([])


  const [modalShow, setModalShow] = React.useState(false);

  const onHourClick = (hourInd) => {
    if (activeHours.length !== 2) {
      setActiveHours((prev) => ([...prev, hourInd]))
    } else {
      setActiveHours((prev) => ([prev[1], hourInd]))
    }
  }

  return (
    <main className="main">
      <>
        <style type="text/css">
          {`
    .btn-send {
      background-color: #7C1FD1;
      color: white;
      border-radius:15px;
      width:100%;
    }
    .btn-send:active{
      background-color: #7C1FD1;
      color: white;
    }
    .btn-send:focus{
      background-color: #7C1FD1;
      color: white;
    }
    .btn-send:hover{
      background-color: #7C1FD1;
      color: white;
    }

    .card{
    border:1px solid #333;
    border-radius:15px;
    height:55px;
    width:52px;
    text-align:center;
    padding:0;
    margin:0;
    }
    .card p{
    margin:0;
    }
   
    .card-hour{
    border:1px solid #333;
    border-radius:15px;
    width:60px;
    height:55px;
    text-align:center;

    }
    .card-holder{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    }

    .card-hour p{
    margin:0;
    }
    `}
        </style>
      </>

      <Container>
        <Row>
          <Col>
            <Image src={MobileHeader} width={390} height={105} alt="Header" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex align-items-center justify-content-around mt-2 mb-2">
          <Col className="d-flex justify-start">
            <Image src={BackArw} width={50} height={105} alt="Back" />
          </Col>
          <Col className="d-flex justify-center">
            <Image src={Logo} width={100} height={105} alt="Logo" />
          </Col>
          <Col className="d-flex justify-end">
            <Image src={Close} width={50} height={105} alt="Close" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Image src={Range} width={390} height={105} alt="Range" />
      </Container>

      <Container>
        <Row className="d-flex mb-4.2">
          <Row>
            <Col className="mb-5">
              <h2 className="text-bigTitle font-bold">აირჩიე დრო</h2>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2 ">
            <Col>
              <h3 className="text-title whitespace-nowrap">აირჩიე სასრუველი თარიღი</h3>
            </Col>
            <Col className="d-flex align-items-center justify-end">
              <Image
                onClick={() => setModalShow(true)}
                src={CalImg2}
                width={40}
                height={105}
                alt="Calendar"
              />
              <CalModal show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
        </Row>
      </Container>
      <Container>
        <Row>
          {date.map((el, ind) => (
            <Col onClick={()=> setActiveDate(ind)} className={`card d-flex align-items-center justify-content-center m-2 cursor-pointer transition-colors duration-300  ${activeDate === ind && '!bg-basePurple text-white'}`} key={ind + el.key}>
              <p className="text-bigp">
                {el.date}
              </p>
              <p className="text-smallp">
                {el.day}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="mt-4 mb-2 ">
            <h3 className="text-title">აირჩიე საათი</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="card-holder">
          {hours.map((el, ind) => (
            <Col
              className={`hover:#7C1FD1 card-hour d-flex flex-col justify-center align-items-center w-full max-w-9 m-2 cursor-pointer transition-colors duration-300  ${activeHours.includes(ind) && "!bg-baseBlack text-white"}`}
              key={el.key}
              onClick={()=>onHourClick(ind)}
            >
              <p className="text-bigp">
                {el.date}
              </p>
              <p className="text-smallp">
                {el.hour}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Button className="text-title mt-32" variant="send">
              გაგრძელება
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={HomeImg} width="100%" height="100%" alt="Home" />
          </Col>
          <Col>
            <Image src={Activities} width="100%" height="100%" alt="Activities" />
          </Col>
          <Col>
            <Image src={Profile} width="100%" height="100%" alt="Profile" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={MobileFooter} width="100%" height="100%" alt="Footer" />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
