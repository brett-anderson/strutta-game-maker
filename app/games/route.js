import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this);
    return this.store.findAll('game');
  },

  actions: {
    new() {
      let game = this.store.createRecord('game');
      game.save()
        .then(()=>{
          console.log(game);
          this.transitionTo('game', game.id);
        });

    }
  }
});
