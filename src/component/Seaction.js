import React from "react";
import "./seaction.css";
import { imagearray } from "./constants";
import view from "./Photo/View.png"

function Seaction(apidata) {
  console.log(apidata);

  function scrollRight(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  }

  return (
    <div className="section">
      {apidata.apidata.map((item, index) => (
        <div className="seactionContainer">
          <div className="data1">
            <div className="rightside">
              <button className="roundbtn">{index}%</button>
              <div className="seactionheading">
                <span>{item}</span>
                <span>Lecture : 20</span>
              </div>
            </div>

            <div onClick={() => scrollRight(index)} className="leftside">
              {" "}
              <img
                src={view}
                className="graterimage"
              />
            </div>
          </div>
          <div id={index} className="data">
            {imagearray.map((el) => {
              return (
                <div className="box">
                  <img src={el.image} className="lectureimage" />
                  <p>{el.tital}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Seaction;
