import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game'),
  type: DS.attr('string'),
  title: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  rules: DS.attr(),
});
