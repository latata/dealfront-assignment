import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { type Type } from 'dealfront-assignment/types/filters';
import type GitHubService from 'dealfront-assignment/services/github';

export default class RepositoriesRoute extends Route {
  queryParams = {
    type: {
      refreshModel: true,
    },
  };

  @service declare github: GitHubService;

  async model({ type, org }: { type: Type; org: string }) {
    return this.github.fetchRepositories(org, type);
  }
}
