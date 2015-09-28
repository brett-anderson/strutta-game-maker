import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  // normalizePayload: function(type) {
  //   if(type.id) {
  //     type.links = {
  //       rounds: "/v2/games/" + type.id + "/rounds"
  //     };
  //
  //     return {
  //       game: type
  //     };
  //   } else {
  //     return {
  //       games: type.results
  //     };
  //   }
  // }

});
