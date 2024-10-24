
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/hero-image.png'
import './css/Home.css'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

const Home=()=>{
  const navigate= useNavigate();
  const fun1=()=>{
    navigate(`/sheduleEvent`)
  }
  const fun2=()=>{
    navigate(`/events`)
  }
    return(
        <>
        <div className='hero'>
          <div className='hero-div1'>
               <h1> <pre>The platform for <br />
               organised <span>minds</span>.
                </pre></h1>
                <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                <a href="#" onClick={fun1}>
        <Button style={{width:"200px"}}>Add Event</Button>
        </a>
        <a href="#" onClick={fun2}>
        <Button style={{width:"200px",color:"black",marginLeft:"20px",backgroundColor:"white"}}>All Events</Button>

        </a>
                
          </div>
          <div className='hero-div2'>
            <img src={img4} alt="" width={"80%"} />

          </div>
        </div>
        <Container className='cards'>
        <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Plan for Loved Ones</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <a href="#" onClick={fun1}>
        <Button style={{width:"200px"}}>Add Event</Button>
        </a>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Plan Your Day</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <a href="#" onClick={fun1}>
        <Button style={{width:"200px"}}>Add Event</Button>
        </a>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Be Organized</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <a href="#" onClick={fun1}>
        <Button style={{width:"200px"}}>Add Event</Button>
        </a>
      </Card.Body>
    </Card>

        </Container>
        
        </>
    )
}

export default Home;