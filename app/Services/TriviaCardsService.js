import { ProxyState } from "../AppState.js"
import { TriviaCard } from "../Models/TriviaCards.js"

class TriviaCardsService{
   async getAllCards(){
        let res = await fetch('https://opentdb.com/api.php?amount=10&category=11')
        let data = await res.json()
        ProxyState.triviaCards = data.map(c => new TriviaCard(c))

    }

    setActiveCard(){
        ProxyState.currentCard = ProxyState.triviaCards.find(c => c[c.number])
    }
}

export const triviaCardsService = new TriviaCardsService()