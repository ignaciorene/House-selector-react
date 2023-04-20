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
    console.log(prop)

    const option = prop

    const [questionsSelected,setQuestionsSelected]=useState([])

    useEffect(()=>{
        console.log(questionsSelected)
    },[questionsSelected])

    {/*If the user choose normal selection then only the first question and other 7 random questions will be use for the quiz
    the next if create a new state that is an array that will storage the random selection. 
    In case the user choose all questions then this is not neccesary, it will use the entire database */}
    if (option=='normalSelection' && questionsSelected.length === 0){
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
    }
    console.log(questionsSelected)

    return(
        <div>
            
        </div>
    )
}

export default Quiz