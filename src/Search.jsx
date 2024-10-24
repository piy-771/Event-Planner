import { useState } from "react";
import axios from "axios";

const Search =()=>{
    const [eventname, setEname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let empname= e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/events`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          let str= key.eventname.toLowerCase();
           let mystatus=str.includes(eventname.toLowerCase());
           console.log(mystatus);
         if (mystatus)
            {  
          return(
            <>
             <tr>
              <td> {key.tag}</td>
              <td>  {key.eventname} </td>
              <td> {key.date} </td>
              <td>  {key.location}</td>
              </tr>
            </>
          )
        }
    })

    return(
        <>
          <h1> Search Employee Records</h1>
Type Emp Name  : <input type="text" value={eventname} onChange={handleChange} />
          
          <hr size="5" color="green"/>
          <table>
            <tr>
                <th>Tag</th>
                <th>Event Name</th>
                <th>Date And Time</th>
                <th>Location</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Search;