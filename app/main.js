import { TriviaCardsController } from "./Controllers/TriviaCardsController.js";

class App {
  triviaCardsController = new TriviaCardsController();
}

window["app"] = new App();
