import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  metadata: DS.attr(),
  entries_count: DS.attr('number'),
  participants_count: DS.attr('number'),
  created: DS.attr('date'),
  last_updated: DS.attr('date'),
  rounds: DS.hasMany('round', {async: true})

});
