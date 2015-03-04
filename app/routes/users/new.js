import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    model = this.store.createRecord('user');
    this.controllerFor('users/new').set('model', model);
  }
});
