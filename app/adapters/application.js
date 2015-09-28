import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'v2',
  host: "http://api-beta.strutta.com",
  headers: {
    Authorization: 'Token token=57cabf0660f67c1e189909d18419ffe4'
  },
});
