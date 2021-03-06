import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('game', {path: '/games/:game_id'}, function() {
    this.route('rounds');
  });
  this.route('games');
});

export default Router;
