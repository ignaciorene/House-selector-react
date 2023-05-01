import React from "react";
import { useState, useEffect } from "react";
import FirstQuestion from "./FirstQuestion";
import {
  NORMAL_SELECTION,
  ALL_QUESTIONS_SELECTION,
} from "../constants/MenuSelection";

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
    <>
      {/*option state starts null, so it shows the main menu, when user makes click in any of the buttons changes the state of option and runs the Quiz module replacing the menu */}
      {!option && (
        <div className="main-container">
          <div className="main-title">
            <h1>Sorting Hat</h1>
          </div>
          <div className="second-container">
            <div id="start-image"></div>
            <div className="options-container">
              <div className="startButtons-container">
                
                <button
                  id="startButton"
                  onClick={() => optionSelected(NORMAL_SELECTION)}
                >
                  Normal selection
                </button>
                <button
                  id="startButton"
                  onClick={() => optionSelected(ALL_QUESTIONS_SELECTION)}
                >
                  All questions selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {option && (
        <FirstQuestion
          userMenuSelection={option}
          onChangeUserMenuSelection={setOption}
        />
      )}
    </>
  );
};

export default Menu;
