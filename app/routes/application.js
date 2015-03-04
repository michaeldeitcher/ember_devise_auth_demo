import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{

  actions: {
    sessionAuthenticationFailed: function(){
      alert('failed to log in. check your credentials');
    },
    sessionAuthenticationSucceeded: function(){
      alert('thanks for logging in!');
    }
  }
});
