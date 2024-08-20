# dealfront-assignment

## Instructions
1. Install the dependencies using `npm install`
2. Create .env file in the root of the project and provide GitHub API token and GitHub organization name to run e2e tests against:
```
GITHUB_TOKEN=your_github_token
TEST_ORG=your_github_organization
```
3. Run the application using `npm start`
4. Run the e2e tests using `npm test`

## Notes
- I did some shortcuts to avoid spending too much time on the assignment (I spent around 4 hours on it - working with Ember is not my daily job and I spent most of the time learning)
  - I did not implement pagination (it fetches up to 100 repositories)
  - I did not implement filtering by programming language (because API does not support filtering by programming language - at least I did not find a way to do it)
  - I did not present number of branches for each repository (because API endpoint does not provide this information)
  - I did not implement loading indicators (there could be some loading indicators while fetching the data from the API)
  - I did not implement a proper error handling (there could be some error notices for the users if the API request fails)
  - I did focus much on the UI - added just basic styles using Bulma
  - Added only some basic e2e tests using Playwright
  - I did not add any unit/integration tests
  - I did not use Ember Data
  - I did not use Ember CLI Mirage for mocking the API requests
