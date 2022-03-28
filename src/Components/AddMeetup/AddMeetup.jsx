// User should be able to add/create new meetups 

import { useState } from "react";
import axios from "axios"

export const AddMeetup = () => {

    const [meetdata,setMeetdata] = useState({
      title:"",
      location:"",
      date:"",
      time:"",
      theme:"",
      description:"",
      image:"",
    })
    
    const HandleSubmit = (e)=>{
      e.preventDefault();
         axios.post("http://localhost:8080/meetups",meetdata)
    }
  const Handlechange = (e)=>{
    const{className,value} = e.target
   
      setMeetdata({...meetdata,[className]:value})
   }

     console.log(meetdata)


  return (
    <div className="addMeetupContainer">
      <form onSubmit={HandleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={Handlechange}  />
        <label>Location</label>
        <select value={""} className="location" onChange={Handlechange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={Handlechange}
          placeholder="format YYYY-MM-DD"
         
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={Handlechange}
          placeholder="format HH:MM"
         
        />
        <br />
        <label>Theme</label>
        <select value={""} className="theme" onChange={Handlechange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={Handlechange}
          placeholder="Description"
       
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={Handlechange}
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
