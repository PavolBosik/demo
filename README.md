# demo
![Github Tests](https://github.com/PavolBosik/demo/actions/workflows/main.yml/badge.svg?branch=main)

demo is a small dummy app created to evaluate various technologies and set up a complete proof-of-concept SW development pipeline in GitHub + AWS.
ATM the app doesn't aim to support any particular business goals, but in the future we could consider making it implement
1) office seat reservation system,
1) parking place reservation system,
1) something else.

Besides technical evaluations we could also consider coming up with conventions, guidelines...
If desired, we could even form an agile cross-functional team and try to adopt SCRUM.

Last but not least, we want to verify that all team members have the required development tools, licenses, permissions...

## What we have so far:
* Dummy FrontEnd web app using React/TypeScript.
* Dummy BackEnd Web API service based on .NET Core 6.
* This GitHub project with initial CI workflow.

## What we would like / consider to incorporate:
* FE side
  * Translation
  * Theming ? (at least light/dark theme)
  * Automatic End-to-end tests
* BE side
  * DB + auto roll-forward mechanism
  * Docker ?
  * AWS Lambda ?
  * multiple microservices ?
  * scaling in AWS ?
* CI / CD pipeline
  * execute UnitTests
  * execute nightly E2E tests
  * deployment to AWS
  * code coverage stats, security scans, ...
  * reproducible builds
* other
  * Nx as a build system ?
  * branching strategy
  * versioning strategy
  * monorepo or multiple repos ?
  * GraphQL instead of pure REST API ?
  * SignalR ?
  * mobile FE ? (is it possible to share code base between normal React app and a React Native mobile app?)
