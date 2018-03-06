app.service('CardService', ['$http', function($http){
  console.log('CardService created')
  let self = this;

  self.randomCard = {};
  self.showClue = {};

  self.getRandomCard = function(){
    console.log('in random');
    $http({
      method: 'GET',
      url: 'https://api.magicthegathering.io/v1/cards?pageSize=1&random=true&layout=normal'
    })
    .then(function(response){
      console.log(response.data.cards[0], 'response from get random card');
      self.randomCard.card = response.data.cards[0];
      console.log(self.randomCard.card.imageUrl);
      if(self.randomCard.card.imageUrl){
          console.log('got an image');
      }
      else{
        self.getRandomCard();
      }
      self.showClue = {};
    })
    .catch(function(error){
      console.log('error in get random card', error);
    })
  }




}])//end card service
