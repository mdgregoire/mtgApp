console.log('js');
const app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages']);

app.config(function ($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/views/card.html',
    controller: 'CardController as cc'
  //}).when('/', {
    //redirectTo: '/views/card.html'
  }).otherwise({template: '<h1>404</h1>'})
})
