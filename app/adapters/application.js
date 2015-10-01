import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'v2',
  host: "http://api-beta.strutta.com",
  headers: {
    Authorization: 'Token token=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
  },
});
