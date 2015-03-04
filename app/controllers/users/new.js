import Ember from 'ember';

export default Ember.ObjectController.extend({
  authenticator: 'simple-auth-authenticator:devise',

  actions: {
    submit: function(){
      var $this = this;
      var fulfill = function(){
        // login user
        $this.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: $this.get('email'),
          password: $this.get('password')
        });
        // Hide the password from the console
        $this.get('model').set('password',null);
      };
      var reject = function(){
        // You must handle reject or exception will get thrown
      };
      this.get('model').save().then(fulfill, reject);
    }
  }

});
