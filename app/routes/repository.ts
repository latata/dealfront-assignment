import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { service } from '@ember/service';
import type GitHubService from 'dealfront-assignment/services/github';

export default class RepositoryRoute extends Route {
  @service declare github: GitHubService;

  async model({ org, name }: { org: string; name: string }) {
    return RSVP.hash({
      repository: this.github.fetchRepository(org, name),
      branches: this.github.fetchBranches(org, name),
    });
  }
}
