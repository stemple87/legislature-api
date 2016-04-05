import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var urlTest = "http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id="+ params.committee_id+"&apikey=df8234f721df44e9814b0aba94aeaf3a";
        var url = "http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id=HSSM&apikey=df8234f721df44e9814b0aba94aeaf3a";
    console.log(url);
    console.log(urlTest);
    return Ember.$.getJSON(urlTest).then(function(responseJSON) {
      return responseJSON.results;
    })
  }
});
