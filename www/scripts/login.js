angular.module('app.login', [])

.controller('LoginCtrl', function ($scope, $state, hoodieAccount) {
  $scope.login = {
    email: 'joaopintoneto@gmail.com',
    password: '123456'
  };

  $scope.signIn = function () {
    hoodieAccount
      .signIn($scope.login.email, $scope.login.password)
      .then(function (data) {
        // console.log(hoodie.account.username);
      })
      .catch(function (error) {
        $scope.error = error.message;
      });
  };
})

.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('root.login', {
      url: '/login',
      views: {
        'content' :{
          templateUrl: 'templates/login.tpl.html',
          controller: 'LoginCtrl'
        }
      },
      onEnter: function () {
        console.log('enter login');
      }
    });
})
