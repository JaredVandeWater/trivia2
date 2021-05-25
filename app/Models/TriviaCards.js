import { ProxyState } from "../AppState.js"
import { shuffle } from "../Utils/ShuffleArr.js"

export class TriviaCard{
    constructor(data){
        this.category = data.category
        this.question = data.question
        this.type = data.type
        this.difficulty= data.difficulty
        this.answer = data.correct_answer
        this.notAnswer = data.incorrect_answers
        this.answersArr = shuffle([...this.notAnswer, this.answer])
      }

      

get cardTemplate(){
    return /*html*/`
<div class="card shadow">
  <div class="card-body">
  <div class="d-flex justify-content-between">
  <h5 class="card-title">${this.category}</h5>
  <h5 class="card-title">${this.difficulty}</h5>
  </div>
    <p class="card-text">${this.question}</p>
  </div>
  <ul class="list-group list-group-flush">
  ${this.type === 'boolean' ? 
    `
    <div class="d-flex justify-content-around my-2">
    <button onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[0]}')" class="btn btn-primary">True</button>
    <button onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[1]}')" class="btn btn-primary">False</button>
    </div>
    ` : 
    
   `<li onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[0]}')" class="list-group-item"><button class="btn btn-block btn-primary">${this.answersArr[0]}</button></li>
    <li onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[1]}')" class="list-group-item"><button class="btn btn-block btn-primary">${this.answersArr[1]}</button></li>
    <li onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[2]}')" class="list-group-item"><button class="btn btn-block btn-primary">${this.answersArr[2]}</button></li>
    <li onclick="app.triviaCardsController.selectAnswer('${this.answer}', '${this.answersArr[3]}')" class="list-group-item"><button class="btn btn-block btn-primary">${this.answersArr[3]}</button></li>`
  }
    `
}

get resultsTemplate(){
    return /*html*/`
<div class="card shadow">
  <div class="card-body">
  <div class="d-flex justify-content-center">
  <h2>Results</h2>
  <ul class="list-group list-group-flush">
  
  `

    
}}