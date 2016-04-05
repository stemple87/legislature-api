import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    committeesLink() {
      this.transitionTo('committees');
    },
    houseCommitteesLink() {
      this.transitionTo('houseCommittees');
    },
    allCommittees() {
      this.transitionTo('all-committees');
    },
    recentBills() {
      this.transitionTo('recent-bills');
    }
  }
});
