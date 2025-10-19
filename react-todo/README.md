React Todo App

A simple Todo List application built with React, demonstrating adding, deleting, and toggling todos. This project also includes tests using Jest and React Testing Library.

Features

Display a list of todos

Add new todos

Toggle todos as completed/uncompleted

Delete todos

Fully tested with Jest and React Testing Library


Getting Started
1. Install dependencies
npm install

2. Run the app
npm start


Open http://localhost:3000
 in your browser to see the app running.

3. Run tests
npm test


Press a to run all tests.

The tests check:

Initial render of todos

Adding a new todo

Toggling a todo as completed/uncompleted

Deleting a todo

Scripts in package.json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}


start → Launches the app in development mode

build → Builds the app for production

test → Runs tests in interactive watch mode

eject → Ejects CRA configuration (use with caution)

Technologies Used

React 18

React Scripts 5

Jest & React Testing Library

HTML, CSS, JavaScript