import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('what-sets-us-apart');
  this.route('order-options');
  this.route('recent-works');
});

export default Router;
