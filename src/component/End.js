import React from "react";
import { firstQuestion, questions } from "../data/data";
import gryffindorLogo from "../img/gryffindor.png";
import ravenclawLogo from "../img/ravenclaw.png";
import hufflepuffLogo from "../img/hufflepuff.png";
import slytherinLogo from "../img/slytherin.png";
import {
  NORMAL_SELECTION,
  ALL_QUESTIONS_SELECTION,
} from "../constants/MenuSelection";

const End = ({
  userMenuSelection,
  animalType,
  firstAnswer,
  answersSelected,
  questionsSelected,
  onChangeUserMenuSelection,
  onChangeAnimalType,
  onChangeFirstAnswer,
  onChangeAnswersSelected,
  onChangeQuestionsSelected,
  onChangesetSelectedAnswer,
  onChangeSetSelectedAnimalType,
}) => {
  //Search the points of the first answer and save it in a json called points
  const firstPoints = firstQuestion.Options[animalType].Options.find(
    (animal) => animal.Answer === firstAnswer
  );

  let points = [
    {
      Gryffindor: firstPoints.Gryffindor,
      Ravenclaw: firstPoints.Ravenclaw,
      Hufflepuff: firstPoints.Hufflepuff,
      Slytherin: firstPoints.Slytherin,
    },
  ];

  //Search the rest of the answers points and save it in a json
  const questionsPoints = questionsSelected
    .map((question, index) =>
      questions[question].Options.find(
        (option) => option.Answer === answersSelected[index]
      )
    )
    .map((answerPoint) => ({
      Gryffindor: answerPoint.Gryffindor,
      Ravenclaw: answerPoint.Ravenclaw,
      Hufflepuff: answerPoint.Hufflepuff,
      Slytherin: answerPoint.Slytherin,
    }));

  //Joint both jsons in one
  points = [...points, ...questionsPoints];

  //Sum all the point for each house
  const gryffindor = points.reduce((a, b) => a + b.Gryffindor, 0);
  const ravenclaw = points.reduce((a, b) => a + b.Ravenclaw, 0);
  const hufflepuff = points.reduce((a, b) => a + b.Hufflepuff, 0);
  const slytherin = points.reduce((a, b) => a + b.Slytherin, 0);

  //search the house with most points
  const winner = Math.max(gryffindor, ravenclaw, hufflepuff, slytherin);

  let houseSortedData = [];

  switch (winner) {
    case gryffindor:
      houseSortedData = ["Gryffindor", gryffindorLogo];
      break;

    case ravenclaw:
      houseSortedData = ["Ravenclaw", ravenclawLogo];
      break;

    case hufflepuff:
      houseSortedData = ["Hufflepuff", hufflepuffLogo];
      break;

    case slytherin:
      houseSortedData = ["Slytherin", slytherinLogo];
      break;
  }

  console.log(points);
  console.log(winner);

  //Function to reset quiz
  const resetUserMenuSelection = (userSelection) => {
    onChangeUserMenuSelection(userSelection);
    onChangeAnimalType("");
    onChangeFirstAnswer("");
    onChangeAnswersSelected("");
    onChangeQuestionsSelected("");
    onChangesetSelectedAnswer("");
    onChangeSetSelectedAnimalType("");
  };

  return (
    <div className="main-container">
      <div className="result-image-container">
        <img className="result-image" src={houseSortedData[1]}></img>
      </div>

      <div className="result-title">
        <h1>You are a {houseSortedData[0]}</h1>
      </div>

      <div className="button-container">
        <div className="startButtons-container">
          <button
            id="startButton"
            onClick={() => resetUserMenuSelection(NORMAL_SELECTION)}
          >
            Normal selection
          </button>
          <button
            id="startButton"
            onClick={() => resetUserMenuSelection(ALL_QUESTIONS_SELECTION)}
          >
            All question selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
