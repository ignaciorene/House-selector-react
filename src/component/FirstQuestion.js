import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { firstQuestion } from "../data/data";
import catImage from "../img/cat.png";
import owlImage from "../img/owl.png";
import toadImage from "../img/toad.png";
import Quiz from "./Quiz";

//3 types of animals to choose
const animals = [
  {
    Type: "Cat",
    Image: catImage,
  },
  {
    Type: "Owl",
    Image: owlImage,
  },
  {
    Type: "Toad",
    Image: toadImage,
  },
];

//when user select an answer then the answer will highlight
const OptionStyle = styled.div`
  background: ${({ selected }) => (selected ? "red" : "")};
`;

//first part shows the category of animals of the first question, when user chooses answer it will show the different options of the selected animal
const FirstQuestion = (prop) => {
    const userMenuSelection = prop;

  //state for the selected answer
  const [selected, setSelected] = useState();
  //state that verifies the user has choosen a type of animal
  const [typeSelected, setTypeSelected] = useState();
  //state that verifies the user final answer
  const [finalAnswer,setFinalAnswer]=useState();
    

  //user choose the type of animal and from there it will show the different options within the selected type of animal
  const displayFirstQuestion = () => {
    const animalOptions = typeSelected
      ? firstQuestion.Options[typeSelected].Options
      : "";

    return (
      <div>
        <div className="question-title-container">{firstQuestion.Question}</div>

        {/*First part of the question let the user choose the type of animal*/}
        {!typeSelected && (
          <div>
            {animals.map((animal, index) => (
              <div>
                <div className="options-container">
                  <OptionStyle
                    key={index}
                    selected={selected === animal.Type}
                    className="option"
                    onClick={() => setSelected(animal.Type)}
                  >
                    {/*<img className="optionImage" src={animal.Image}></img>*/}

                    <div className="optionText">{animal.Type}</div>
                  </OptionStyle>
                </div>
              </div>
            ))}

            <div className="button-container">
              <button
                className="select-answer-button"
                onClick={() => setTypeSelected(selected)}
              >
                Submit answer
              </button>
            </div>
          </div>
        )}

        {/*Second part of the question let the user choose the final answer*/}
        {typeSelected && (
          <div>
            {animalOptions?.map((option, index) => (
              <div>
                <div className="options-container">
                  <OptionStyle
                    key={index}
                    selected={selected === option.Answer}
                    className="option"
                    onClick={() => setSelected(option.Answer)}
                  >
                    {/*<img className="optionImage" src={option.Image}></img>*/}

                    <div className="optionText">{option.Answer}</div>
                  </OptionStyle>
                </div>
              </div>
            ))}

            <div className="button-container">
              <button
                className="select-answer-button"
                onClick={() => console.log(selected)}
              >
                Submit answer
              </button>
            </div>
          </div>
        )}

        {/*Load next component when user choose the final answer*/}
        {finalAnswer && <Quiz prop={userMenuSelection}/>}

      </div>
    );
  };

  return <div>{displayFirstQuestion()}</div>;
};

export default FirstQuestion;
