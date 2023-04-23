import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { questions } from "../data/data";
import End from "./End";

//when user select an answer then the answer will highlight
const OptionStyle = styled.div`
  background: ${({ selected }) => (selected ? "red" : "")};
`;

//function that helps choose random selection of questions
function getRandomSelection(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.round(result);
}

const Quiz = ({ userMenuSelection, animalType, firstAnswer }) => {
  const option = userMenuSelection;

  //State that is an array with the questions selected
  const [questionsSelected, setQuestionsSelected] = useState([]);
  //State that tracks current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //State that tracks selected answer
  const [selectedAnswer, setSelectedAnswer] = useState();
  //State that saves the different answers
  const [answersSelected, setAnswersSelected] = useState([]);

  /*
    useEffect(()=>{
        console.log(questionsSelected)
    },[questionsSelected])*/

  /*If the user choose normal selection then only the first question and other 7 random questions will be use for the quiz
    the next if create a new state that is an array that will storage the random selection. 
    In case the user choose all questions then it will use the entire database */
  if (option == "normalSelection" && questionsSelected.length === 0) {
    let i = 0;
    let newQuestionsSelected = [];
    while (i < 7) {
      let n = getRandomSelection(0, questions.length - 1);
      if (!newQuestionsSelected.includes(n)) {
        i++;
        newQuestionsSelected.push(n);
      }
    }
    setQuestionsSelected(newQuestionsSelected);
  } else if (
    option == "allQuestionsSelection" &&
    questionsSelected.length === 0
  ) {
    let newQuestionsSelected = [];
    for (let i = 0; i < questions.length; i++) {
      newQuestionsSelected.push(i);
    }
    setQuestionsSelected(newQuestionsSelected);
  }

  //function that verifies the user answer and update the component to the next question updating the state of currentQuestion and in case that theres no more questions loads the next component
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  //function that shows the user the selected answer
  const onSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  //Function that push new answer into the array that saves all the answers
  const onSubmit = (answer) => {
    if (answer) {
      setAnswersSelected((prevState) => [...prevState, answer]);
      nextQuestion();
    }
  };

  //When user answer all questions, then quiz is finished
  const quizFinished = answersSelected.length === questionsSelected.length;

  //function that shows current question
  const questionDisplay = () => {
    const question = questions[questionsSelected[currentQuestion]];
    const questionTitle = question?.Question;
    const questionOptions = question?.Options;

    return (
      <>
        {!quizFinished && (
          <div>
            <div className="question-title-container">{questionTitle}</div>

            <div className="options-container">
              {questionOptions?.map((answer, index) => (
                <OptionStyle
                  key={index}
                  selected={selectedAnswer === answer.Answer}
                  className="option"
                  id={"option" + index}
                  onClick={() => onSelect(answer.Answer)}
                >
                  <div
                    className="optionImage"
                    id={"optionImage" + index}
                    style={{
                      backgroundImage: `url('../public/img/${answer.Image}')`,
                    }}
                  ></div>

                  <div className="optionText" id={"optionText" + index}>
                    {answer.Answer}
                  </div>
                </OptionStyle>
              ))}
            </div>

            <div className="button-container">
              <button
                className="select-answer-button"
                onClick={() => onSubmit(selectedAnswer)}
              >
                Submit answer
              </button>
            </div>
          </div>
        )}
        {quizFinished && (
          <End
            animalType={animalType}
            firstAnswer={firstAnswer}
            answersSelected={answersSelected}
            questionsSelected={questionsSelected}
          />
        )}
      </>
    );
  };

  return <div>{questionDisplay()}</div>;
};

export default Quiz;
