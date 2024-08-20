import EmberRouter from '@ember/routing/router';
import config from 'dealfront-assignment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('repositories', { path: '/:org' });
  this.route('repository', { path: '/:org/:name' });
});
