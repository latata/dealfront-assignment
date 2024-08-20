import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Router from '@ember/routing/router';

export default class IndexController extends Controller {
  @service declare router: Router;
  @tracked organization = '';

  @action onSubmit(event: Event) {
    event.preventDefault();
    this.router.transitionTo('repositories', this.organization);
  }
}
