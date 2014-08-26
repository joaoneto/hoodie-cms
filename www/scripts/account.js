angular.module('app.account', [])

.factory('account', function ($q) {
  var account = {
    user: hoodie.account.username,
    signUp: function (user, password) {
      return $q.when(hoodie.account.signUp(user, password));
    },
    signIn: function (user, password) {
      return $q.when(hoodie.account.signIn(user, password));
    },
    signOut: function () {
      return $q.when(hoodie.account.signOut());
    },
    destroy: function () {
      return $q.when(hoodie.account.destroy());
    }
  };

  console.log('user', account.user);
  hoodie.account.on('authenticated', function (user) {
    account.user = user;
    console.log('authenticated');
  });

  hoodie.account.on('unauthenticated', function (user) {
    account.user = null;
    console.log('unauthenticated');
  });

  return account;
});
