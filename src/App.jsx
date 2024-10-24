import Addplan from "./Addplan";
import AllEvents from "./AllEvents.jsx";
import EditData from "./EditData.jsx";
import Home from "./Home";
import Layout from "./Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Search from "./Search.jsx";


const App=()=>{
  return(
    <>
      <BrowserRouter>
           <Routes>
               <Route path="/" element={<Layout/>}>
                <Route path="home" index element={<Home/>}/>
                <Route path="sheduleEvent"  element={<Addplan/>}/>
                <Route path="events" index element={<AllEvents/>}/>
                <Route path="search" index element={<Search/>}/>
                <Route path="editrec/:myid" element={<EditData/>} />
                 
               </Route>
           </Routes>        
        </BrowserRouter>
    </>
  )
}
export default App;