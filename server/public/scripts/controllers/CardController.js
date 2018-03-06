const CardController = app.controller('CardController', ['CardService', function(CardService){
    let self = this;
console.log('cardcontroller created');

  self.getRandomCard = CardService.getRandomCard;
  self.randomCard = CardService.randomCard;
  self.showClue = CardService.showClue;


}])//end CardController
