import DS from "ember-data";
// http://emberjs.com/guides/models/using-the-store/

export default DS.Store.extend({
// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '-active-model'
});
