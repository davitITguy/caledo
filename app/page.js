import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CalImg from "../public/smallCal.svg";
import CalImg2 from "../public/smallCal2.svg";
import Range from "../public/range.svg";
import BackArw from "../public/backArrow.svg";
import Logo from "../public/Caledologo.svg";
import Close from "../public/close.svg";
import MobileHeader from "../public/mobileHeader.svg";
import MobileFooter from "../public/mobileFooter.svg";
import Activities from "../public/activities.svg";
import HomeImg from "../public/home.svg";
import Profile from "../public/profile.svg";


export default function Home() {

  let date = [
    {
      day: "ორშ",
      date: "18",
    },
    {
      day: "ორშ",
      date: "18",
    },
    {
      day: "ორშ",
      date: "18",
    },
    {
      day: "ორშ",
      date: "18",
    },
    {
      day: "ორშ",
      date: "18",
    },
    {
      day: "ორშ",
      date: "18",
    }
  ];

  let hours = [
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
    {
    hour: "10:00",
    date: "04/04",
    },
  ]

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
            <Image
              src={MobileHeader}
              width={390}
              height={105}
              alt="Header"
            />
          </Col>
        </Row >
      </Container>
      <Container>
        <Row className='d-flex align-items-center justify-content-around mt-2 mb-2'>
          <Col className='d-flex justify-start'>
            <Image
              src={BackArw}
              width={50}
              height={105}
              alt="Back"
            />
          </Col>
          <Col className='d-flex justify-center'>
            <Image
              src={Logo}
              width={100}
              height={105}
              alt="Logo"
            />
          </Col>
          <Col className='d-flex justify-end'>
            <Image
              src={Close}
              width={50}
              height={105}
              alt="Close"
            />
          </Col>
        </Row>
      </Container>
      <Container>
          <Image
              src={Range}
              width={390}
              height={105}
              alt="Range"
            />
      </Container>
      
      <Container>
        <Row className='d-flex mb-4.2'>
          <Row>

          <Col className='mb-5' >
            <h2 className='text-bigTitle'>აირჩიე დრო</h2>
          </Col>
          </Row>
          
          <Row className='d-flex align-items-center mb-2 '>
          <Col >
            <h3 className='text-title whitespace-nowrap'>აირჩიე სასრუველი თარიღი</h3>
          </Col>
          <Col className='d-flex align-items-center justify-end'>
             <Image
              src={CalImg2}
              width={40}
              height={105}
              alt="Calendar"
            />
          </Col>
          </Row>
        </Row>
       
      </Container>
      <Container>
          <Row >
            {date.map((el) => (
              <Col className='card d-flex align-items-center justify-content-center m-2'>
                <p className='text-bigp'>{el.date}</p>
                <p className='text-smallp'>{el.day}</p>
              </Col>
            ))}            
          </Row>
        
      </Container>
      <Container>
        <Row>
          <Col className='mt-4 mb-2 '>
          <h3 className='text-title'>აირჩიე საათი</h3>
          </Col>
        </Row>

      </Container>
      <Container>
        <Row className='card-holder'>
          
          {hours.map((el) => (
            <Col className='hover:#7C1FD1 card-hour d-flex flex-col justify-center align-items-center w-full max-w-9 m-2'>
              <p className='text-bigp'>{el.date}</p>
              <p className='text-smallp'>{el.hour}</p>
            </Col>
          ))}
          </Row>

      </Container>
      <Container>
        <Row>
          <Col>
            <Button className='text-title mt-32' variant="send">გაგრძელება</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
           <Image
              src={HomeImg}
               width="100%"
              height="100%"
              alt="Home"
            />
          </Col>
          <Col>
           <Image
              src={Activities}
               width="100%"
              height="100%"
              alt="Activities"
            />
          </Col>
          <Col>
           <Image
              src={Profile}
               width="100%"
              height="100%"
              alt="Profile"
            />
          </Col>
       </Row>
      </Container>
      <Container >
        <Row>
          <Col>
             <Image
              src={MobileFooter}
               width="100%"
              height="100%"
              alt="Footer"
            />
          </Col>
        </Row>
      
      </Container>
    </main>
  );
}
