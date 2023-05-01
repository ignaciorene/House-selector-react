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
  background: ${({ selected }) => (selected ? "rgba(149, 171, 240, 0.5)" : "")};
`;

//first part shows the category of animals of the first question, when user chooses answer it will show the different options of the selected animal
const FirstQuestion = ({ userMenuSelection, onChangeUserMenuSelection }) => {
  //state for the selected animal type
  const [selectedAnimalType, setSelectedAnimalType] = useState();
  //State for the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState();
  //state that verifies the user has choosen a type of animal
  const [typeSelected, setTypeSelected] = useState();
  //state that verifies the user final answer
  const [finalAnswer, setFinalAnswer] = useState();

  //user choose the type of animal and from there it will show the different options within the selected type of animal
  const animalOptions = typeSelected
    ? firstQuestion.Options[typeSelected].Options
    : "";

  //Function onSubmit that prevents the user to submit empty answer
  const onSubmitType = (selectedAnswer) => {
    if (selectedAnswer) {
      setTypeSelected(selectedAnimalType);
    }
  };

  const onSubmitFinalAnswer = (selectedAnswer) => {
    if (selectedAnswer) {
      setFinalAnswer(selectedAnswer);
    }
  };

  return (
    <div>
      {/*First part of the question let the user choose the type of animal*/}
      {!typeSelected && (
        <div className="main-container">
          <div className="question-title-container">
            {firstQuestion.Question}
          </div>
          <div className="options-container">
            {animals.map((animal, index) => (
              <OptionStyle
                key={index}
                selected={selectedAnimalType === animal.Type}
                className="option"
                onClick={() => setSelectedAnimalType(animal.Type)}
              >
                <img className="optionImage" src={animal.Image}></img>

                <div className="optionText">{animal.Type}</div>
              </OptionStyle>
            ))}
          </div>

          <div className="button-container">
            <button
              className="select-answer-button"
              onClick={() => onSubmitType(selectedAnimalType)}
            >
              Submit answer
            </button>
          </div>
        </div>
      )}

      {/*Second part of the question let the user choose the final answer*/}
      {typeSelected && !finalAnswer && (
        <div className="main-container">
          <div className="question-title-container">
            {firstQuestion.Question}
          </div>
          <div className="options-container">
            {animalOptions?.map((option, index) => (
              <OptionStyle
                key={index}
                selected={selectedAnswer === option.Answer}
                className="option"
                onClick={() => setSelectedAnswer(option.Answer)}
              >
                <img src={require("../../public/img/" + option.Image)} className="optionImage" />

                <div className="optionText">{option.Answer}</div>
              </OptionStyle>
            ))}
          </div>

          <div className="button-container">
            <button
              className="select-answer-button"
              onClick={() => onSubmitFinalAnswer(selectedAnswer)}
            >
              Submit answer
            </button>
          </div>
        </div>
      )}

      {/*Load next component when user choose the final answer*/}
      {finalAnswer && (
        <Quiz
          userMenuSelection={userMenuSelection}
          onChangeUserMenuSelection={onChangeUserMenuSelection}
          animalType={typeSelected}
          onChangeAnimalType={setTypeSelected}
          firstAnswer={finalAnswer}
          onChangeFirstAnswer={setFinalAnswer}
          onChangesetSelectedAnswer={setSelectedAnswer}
          onChangeSetSelectedAnimalType={setSelectedAnimalType}
        />
      )}
    </div>
  );
};

export default FirstQuestion;
