import { useState } from "react";
 import axios from "axios"

export const LoginSignUp = () => {

     
    const [formdata,setFormdata] = useState({
      name:"",
      password:"",
      location:"", 
      image:""

    })

    const [logindata,setLogindata] = useState({
      name:"",
      password:""
    })
   const [data,setData]= useState([])
   const Handlechange = (e)=>{
    const{className,value} = e.target
   
      setFormdata({...formdata,[className]:value})
   }
   const Loginchange = (e)=>{
    const{className,value} = e.target
   
      setLogindata({...logindata,[className]:value})
   }

   const HandleSubmit = (e)=>{
     e.preventDefault();
        axios.post("http://localhost:8080/users",formdata)
   }
   const LoginSubmit = async (e)=>{
        e.preventDefault();
        await axios.get("http://localhost:8080/users").then((res)=>{
           setData(res.data)
         });
         for(let i=0;i<data.length;i++){
           if(data[i].name==logindata.name && data[i].password == logindata.password ){
               return true;
           }
         }
         return false;
   }
   console.log(data)
   console.log(formdata);
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={HandleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={ Handlechange }
                />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password" 
          onChange={Handlechange}
          
        />
        <br />
        <select value={""} className="location" onChange={Handlechange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology" value={"technology"}
          onChange={Handlechange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" value={"food"} onChange={Handlechange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" value={"movies"} onChange={Handlechange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" value={"culture"} onChange={Handlechange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" value={"art"} onChange={Handlechange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" value={"drama"} onChange={Handlechange} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={Handlechange}
          
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={LoginSubmit}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={Loginchange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={Loginchange}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
