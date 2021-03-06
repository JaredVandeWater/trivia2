import { ProxyState } from "../AppState.js"
import { ResultsCard } from "../Models/ResultsCard.js"
import { TriviaCard } from "../Models/TriviaCards.js"

class TriviaCardsService{
   async getAllCards(){
        let res = await fetch('https://opentdb.com/api.php?amount=10&category=11')
        let data = await res.json()
        ProxyState.triviaCards = data.results.map(c => new TriviaCard(c))
        this.setActiveCard()

    }

    setActiveCard(){
        
        ProxyState.currentCard = ProxyState.triviaCards[ProxyState.currentCardNumber]
        
    }

    selectAnswer(answer, button){
        if(answer === button){
            console.log('CORRECT');
        }else{
            console.log('WRONG');
        }
        if (ProxyState.currentCardNumber<ProxyState.triviaCards.length){
            ProxyState.currentCardNumber++
            this.setActiveCard()
        }
        if(ProxyState.currentCardNumber === ProxyState.triviaCards.length) {
        ProxyState.isQuizDone = true
        ProxyState.currentCard = new ResultsCard()}
        console.log(ProxyState.currentCardNumber);
        console.log(ProxyState.currentCard);
    }
}

export const triviaCardsService = new TriviaCardsService()