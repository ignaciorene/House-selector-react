import React from "react";
import { useState,useEffect } from "react";
import questions from "../data/data";

//function that helps choose random selection of questions
function getRandomSelection(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result=Math.floor(Math.random() * (max - min + 1) + min);
    return Math.round(result)
}

const Quiz = ({prop}) => {

    const option = prop

    //State that is an array with the questions selected
    const [questionsSelected,setQuestionsSelected]=useState([])
    //State that tracks current question
    const [currentQuestion, setCurrentQuestion]=useState(0)
    //State that tracks selected answer
    const [selectedAnswer,setSelectedAnswer]=useState()

    /*
    useEffect(()=>{
        console.log(questionsSelected)
    },[questionsSelected])*/

    /*If the user choose normal selection then only the first question and other 7 random questions will be use for the quiz
    the next if create a new state that is an array that will storage the random selection. 
    In case the user choose all questions then it will use the entire database */
    if (option == 'normalSelection' && questionsSelected.length === 0){
        let i=0;
        let newQuestionsSelected = [0];
        while(i<7){
            let n = getRandomSelection(1,questions.length-1);
            if(!newQuestionsSelected.includes(n)) {
                i++;
                newQuestionsSelected.push(n);
            }
        }
        setQuestionsSelected(newQuestionsSelected);
    } else if (option == 'allQuestionsSelection' && questionsSelected.length === 0) {
        let newQuestionsSelected = [];
        for (let i = 0; i < questions.length; i++) {
            newQuestionsSelected.push(i);
        }
        setQuestionsSelected(newQuestionsSelected);
    }

    //function that verifies the user answer and update the component to the next question updating the state of currentQuestion
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    //function that shows current question
    const questionDisplay = ()=>{

        const question = questions[questionsSelected[currentQuestion]]
        const questionTitle = question ? question.Question : ''
        const questionOptions = question ? question.Options : ''
        console.log(questionOptions)
        return(
            <div>
                <div className="question-title-container">
                    {questionTitle}
                </div>

                <div className='options-container'>
                    {questionOptions && questionOptions.map((answer,index)=>(
                        <div key={index} className="option" id={"option"+index}>
                            <div className='optionImage' id={'optionImage'+index} style={{ backgroundImage: `url('../public/img/${answer.Image}')` }}></div>

                            <div className='optionText' id={'optionText'+index}>
                                {answer.Type}
                            </div>
                        </div>
                    ))}
                </div>
        
                <div className='button-container'>
                    <button className='select-answer-button'>Submit answer</button>
                </div>
            </div>
        )
    }

    return(
        <div>{questionDisplay()}</div>
    )
}

export default Quiz