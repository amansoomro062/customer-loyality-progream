Basic Technical Test for [AIMEGroup](https://aime.global/)

## System requirements
You’ll want to ensure you have the following already installed on your local machine before getting started with the test:
* **Node 12+:** The current LTS (long-term support) release. We like to use a [Node Version Manager like NVM](https://github.com/nvm-sh/nvm).
* **NPM 6+ or Yarn:** Both of these package managers have ups and downs, choose whichever you prefer. Follow the installation instructions for Yarn or NPM to make sure you're using the latest version.

## Setup Instructions
1. Clone this repository
2. Type the following command to install the dependencies and run the project
````
npm install && npm start
````

## Task Instructions
1. Tech Stack to use
    * ReactJS for frontend
    * [Chakra UI](https://chakra-ui.com/) as UI Library
    * [Hasura](https://hasura.io/) as the backend
    * [Apollo client](https://www.apollographql.com/docs/react/) to communicate between ReactJS and Hasura

2. Get started
    * Signup on [Hausra](https://hasura.io/)
    * Create a new project and connect [Heroku](https://www.heroku.com/) database
    * Create a table, customers, add columns, name, email, and role
    * Create a simple, single page using the [Chakra UI table component](https://chakra-ui.com/docs/components/table/usage)

3. UI Design
    * There is not much preference on UI, simple UI will be fine.

4. Functional Requirements
    * Read from the customers table created earlier in the Hasura
    * Add new record button to open popup and take input
    * Be able to add new record
    * Edit Existing Records
    * Delete record
    * There should be a [loader/spinner](https://chakra-ui.com/docs/components/spinner/usage) whenever an operation is being performed
    * There should be a confirm popup when deleting the record

## Browser Support
We expect the solution to work in the latest version of Chrome

## Acceptance criteria

**We have a high focus on attention to details in code**
* Solution should be written in either Reactjs
* Chakra UI should be used
* The formatting of the codebase should be consistent and written in a modular approach
* We expect the codebase to be written using ES6+ and libraries kept to a minimum
* We expect the code to be included in the relevant files
* No other CSS framework allowed


## Tips
Use linting to format the code and autofix most of the formatting issues
```shell script
npm run lint
```
