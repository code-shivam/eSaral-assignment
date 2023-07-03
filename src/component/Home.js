import React, { useEffect, useState } from "react";
import Index from "./Index";
import Navbar from "./Navbar";
import Seaction from "./Seaction";
import "./home.css";
import axios from "axios";

function Home() {
  //  The api is not working so i am using the static data 
  // const URL = "https://api.esaral.com/v2/general/physics-dummy-data";
  // const [apidata, setApidata] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(URL)
  //     .then((response) => {
        
  //       setApidata(response.data );
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  const apidata =['Units & Dimensions','Vector','Laws of Motion','Kinematics','Electrostatics','Rotational Dynamics','Gravitation',
  "Fluid Dynamics",'Units & Dimensions']
  
  return (
    <div className="homecontainer">
      <Index apidata={apidata} />
      <div className="aside">
        <Navbar/>
        <Seaction apidata={apidata}/>
      </div>
    </div>
  );
}

export default Home;
