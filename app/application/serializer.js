import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(type) {
    console.log(type);
    return type;
  }

});
