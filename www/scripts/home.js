angular.module('app.home', [])

.controller('HomeCtrl', function ($scope, $state) {
})

.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('root.home', {
      url: '/',
      views: {
        'content' :{
          templateUrl: 'templates/home.tpl.html',
          controller: 'HomeCtrl'
        }
      },
      onEnter: function () {
        console.log('enter home');
      }
    });
});
