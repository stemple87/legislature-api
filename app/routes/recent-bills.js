import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function () {
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/bills?apikey="+key;
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  actions: {
    billSponsorLink(lastName) {
      console.log("route " +lastName);
      this.transitionTo('bill-sponsor', lastName);
    }
  }
});
