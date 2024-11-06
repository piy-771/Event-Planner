import Container from 'react-bootstrap/Container';
import './css/Addplan.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-bootstrap';
//import Toast from 'react-bootstrap/Toast';
import { message } from 'antd';

const Addplan=()=>{
    const [startDate, setStartDate] = useState(null);
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="https://json-server-deploy-w380.onrender.com/events";
        const eventData={ 
          ...input,
          date:startDate ? startDate.toISOString() :null,
        };
        axios.post(api, eventData).then((res)=>{
            console.log(res);
            message.success("Data Successfully Save!!!")
        })
       }
    return(
        <>
        <Container style={{backgroundColor:"#994F3C"}} className="maindiv" fluid>
            
               
                <div  className='maindiv-form'>
                <h1>SCHEDULE YOUR EVENT</h1>
                <Form >
                <Form.Group className='mb-3' controlId='exampleForm.ControInput1'>
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as={"select"}  name="tag" onChange={handleInput}>
                    <option value="">Tag</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Party">Party</option>
                    </Form.Control>

                </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Event Name</Form.Label>
        <Form.Control name="eventname" onChange={handleInput} />
      </Form.Group>
      
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput4" >
            <Form.Label>Date and Time</Form.Label>
            <br />
            <DatePicker
            
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15} // Set time intervals like 15 min, 30 min, etc.
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa" // Format for displaying date and time
          customInput={<Form.Control />}
          placeholderText="Choose date and time"
          name="date"
        />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput5" >
            <Form.Label>Enter Location</Form.Label>
            <Form.Control  type="text"  name="location" onChange={handleInput} />
      </Form.Group>
      <div className='text-center' >
    <Button style={{ background: "black",fontSize:"20px"}} onClick={handleSubmit}>ADD EVENT</Button>
    <ToastContainer/>
    
    </div>
     
    </Form>
                </div>
                


        </Container>
        
        </>
    )
}

export default Addplan;