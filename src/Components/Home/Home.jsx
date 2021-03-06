import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Event } from "../Event/Event";

export const Home = () => {

      const[data,setData] = useState([]);
    
       useEffect(()=>{
        GetData();
       })
        const GetData = ()=>{
          axios.get(" http://localhost:8080/meetups").then((res)=>{
            setData(res.data);
          })
        }
   return (
    <div className="homeContainer">
      {data
        .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to="/event" className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)

              
             */}
             <Event  title={el.title} theme={el.theme} description = {el.description} date={el.date} time={el.time} location={el.location}  image={el.image} />
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to="/addmeetup"> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
