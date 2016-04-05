import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/legislators?last_name=Kirk&apikey=" + key;
    console.log(params);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }

});
