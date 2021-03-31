# redux-todos

## The proverbial 'Todo' app built as a reference utilizing React/Redux application architecture.

I put this together as a reference for a good application pattern utilizing Redux w/ React. I mocked a server-side API with a promise-based Javascript "back-end" (api.js) and include comments describing some under-the-hood behavior with Redux that I found initially confusing. App has some error handling in first 'optimisticly' (premptively updating state for better UI experience) making API calls that periodically fail.

## Usage

- `npm run start` brings up dev server
- navigate to localhost:8080

## Technologies used

- NPM - package manager
- Webpack - Module bundler - built config from scratch for learning purposes (no create-react-app)
- Webpack dev server
- react-redux - 'connects' redux store to react by providing components access to store/dispatch via React's Context API
- redux-thunk - Middleware useful for abstract data fetching logic from UI code.
- babel - transpile JSX, ES6
