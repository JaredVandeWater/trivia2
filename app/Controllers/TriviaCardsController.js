import { ProxyState } from "../AppState.js";
import { triviaCardsService } from "../Services/TriviaCardsService.js";

function _draw(){
    let template = ''
    if (ProxyState.currentCard!='results'){
        template = ProxyState.currentCard?.cardTemplate
    }else{template = currentCard.resultsTemplate}


    document.getElementById('app').innerHTML = template

}


export class TriviaCardsController{
    constructor(){
        this.getAllCards()
        ProxyState.on('currentCard', _draw)
    }

    async getAllCards(){
        try {
            triviaCardsService.getAllCards()
        } catch (error) {
            console.error(error)
        }
    }

    setActiveCard(){
        triviaCardsService.setActiveCard()
    }

    selectAnswer(answer, button){
        triviaCardsService.selectAnswer(answer, button)
    }
}