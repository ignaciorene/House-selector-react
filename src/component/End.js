import React from "react";
import { firstQuestion, questions } from "../data/data";

const End = ({
  animalType,
  firstAnswer,
  answersSelected,
  questionsSelected,
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

  const houseSorted = () => {
    switch (winner) {
      case gryffindor:
        return "Gryffindor";

      case ravenclaw:
        return "Ravenclaw";

      case hufflepuff:
        return "Hufflepuff";

      case slytherin:
        return "Slytherin";
    }
  };

  return <div>{houseSorted()}</div>;
};

export default End;
