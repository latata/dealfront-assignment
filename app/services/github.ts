import Service from '@ember/service';
import config from '../config/environment';
import type { Type } from 'dealfront-assignment/types/filters';

export default class GitHubService extends Service {
  private async fetch(path: string) {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: {
        Authorization: `Bearer ${config.APP['GITHUB_TOKEN']}`,
      },
    });
    return response.json();
  }

  fetchRepositories(org: string, type: Type) {
    return this.fetch(`/orgs/${org}/repos?type=${type}&per_page=100`);
  }

  fetchRepository(org: string, name: string) {
    return this.fetch(`/repos/${org}/${name}`);
  }

  fetchBranches(org: string, name: string) {
    return this.fetch(`/repos/${org}/${name}/branches`);
  }
}
