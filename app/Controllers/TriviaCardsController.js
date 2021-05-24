import { ProxyState } from "../AppState.js";
import { triviaCardsService } from "../Services/TriviaCardsService.js";

function _draw(){
    let template = ''
    template = ProxyState.currentCard.template
    document.getElementById('app').innerHTML = template

}


export class TriviaCardsController{
    constructor(){
        ProxyState.on('currentCard', _draw)
        this.getAllCards()
        this.setActiveCard()
        _draw()
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
}