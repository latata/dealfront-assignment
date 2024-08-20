import { Type } from 'dealfront-assignment/types/filters';
import process from 'node:process';

const baseUrl = 'http://localhost:4200';

export function repositoriesUrl(type?: Type) {
  if (process.env['TEST_ORG'] === undefined) {
    throw new Error('TEST_ORG environment variable is not set');
  }

  let url = `${baseUrl}/${process.env['TEST_ORG']}`;

  if (type) {
    url += `?type=${type}`;
  }

  return url;
}
