import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RepositoriesController extends Controller {
  queryParams = ['type'];

  @tracked type = 'all';

  @action changeType(event: Event) {
    this.type = (event.target as HTMLSelectElement).value;
  }
}
