import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

var MyLoginControllerMixin;

MyLoginControllerMixin = Ember.Mixin.create(LoginControllerMixin, {
  actions: {
    // Work around for https://github.com/simplabs/ember-simple-auth/issues/439
    // Catch the failed promise in the SimpleAuth.LoginControllerMixin authenticate action
    authenticate: function() {
      this._super()["catch"](function() {
        // empty function to eat the exception
      });
      return false;
    },
    sessionAuthenticationFailed: function(){
      alert('failed to log in. check your credentials');
    },
    sessionAuthenticationSucceeded: function(){
      alert('thanks for logging in!');
    }    
  }
});

export default Ember.Controller.extend(MyLoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  identificationAttributeName: 'email'
});
