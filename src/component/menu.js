import React from "react";
import { useState, useEffect } from "react";
import FirstQuestion from "./FirstQuestion";

const Menu = () => {
  const [option, setOption] = useState("");

  /*
    useEffect(()=>{
        console.log(option)
    },[option])*/

  const optionSelected = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div className="main-container">
      {/*option state starts null, so it shows the main menu, when user makes click in any of the buttons changes the state of option and runs the Quiz module replacing the menu */}
      {!option && (
        <>
          <div className="main-title">
            <h1>Sorting Hat</h1>
          </div>
          <div className="second-container">
            <div id="start-image"></div>
            <div className="options-container">
              <div className="startButtons-container">
                <button
                  id="startButton"
                  onClick={() => optionSelected("normalSelection")}
                >
                  Normal selection
                </button>
                <button
                  id="startButton"
                  onClick={() => optionSelected("allQuestionsSelection")}
                >
                  All questions selection
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {option && <FirstQuestion userMenuSelection={option} />}
    </div>
  );
};

export default Menu;
