import axios from "axios";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const AllEvents=()=>{
    const [events, setEvents]= useState([]);
    //const [ename, setEname]=useState("");
    const navigate= useNavigate();
    const loadData=()=>{
          let url="http://localhost:3000/events";
          axios.get(url).then((res)=>{
            console.log(res.data);
            setEvents(res.data);
          })
    }

    useEffect(()=>{
        loadData();
    }, [])

    const myEdit=(id)=>{
        navigate(`/editrec/${id}`)
   }
   const myDel=(id)=>{
    let api=`http://localhost:3000/events/${id}`
    axios.delete(api).then((res)=>{
      console.log(res); 
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}

  const ans= events.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.tag} </td>
            <td> {key.eventname} </td>
            <td> {key.date} </td>
            <td> {key.location} </td>
            <td>
            <a href="#" onClick={()=>{myEdit(key.id)}}>
            <Button variant="warning" >Update</Button>
</a>
            </td>
           
            <td>
                <a href="#" onClick={()=>{myDel(key.id)}}>
                <Button variant="danger" >Delete</Button>
                </a>
            </td>
            
          </tr>
        </>
    )
  })
    return(
        <>
        <div className="display-search">
        <h1>Your Events</h1>
        </div>
        

         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Tag</th>
          <th>Event Name</th>
          <th>Date and Time</th>
          <th>Loction</th>
          <th>
            Update
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
         
        </>
    )
}

export default AllEvents;