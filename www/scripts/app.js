angular.module('app', [
  'ngSanitize',
  'ui.router',
  'hoodie',
  'app.home',
  'app.login'
])

.controller('AppCtrl', function ($scope, $state, hoodieAccount) {
  $scope.$state = $state;
  $scope.account = hoodieAccount;
})

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('', '/')
    .otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      views: {
        '@': {
          templateUrl: 'templates/default.tpl.html',
          controller: 'AppCtrl',
          resolve: {
            user: function () {
              return { name: 'João Neto' };
            }
          }
        },
        'header@root': {
          templateUrl: 'templates/header.tpl.html'
        },
        'footer@root': {
          templateUrl: 'templates/footer.tpl.html'
        }
      },
      onEnter: function () {
        console.log('enter root');
      }
    })
})

.run(function ($rootScope, $state, hoodieAccount) {
  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    if (!hoodieAccount.username && toState.data && toState.data.requireLogin) {
      e.preventDefault();
      $rootScope.$validationErrors = null;
      $state.go('root.login');
    }
  });
})
