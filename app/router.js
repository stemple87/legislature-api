import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('houseCommittees');
  this.route('all-committees');
  this.route('sub-committees', {path: '/sub-committees/:committee_id'});
});

export default Router;
