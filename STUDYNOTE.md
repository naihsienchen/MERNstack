# June 7
## project starter
start new app:npx create-react-app 'project name'
start localhost: npm start

## What is state

## What is class component
class component has a state, while functional component is stateless
in react, we only use arrow functions in JS, we do not use function keyword.

## What is props
- when we have parent and child component, we can use props to pass data from parent to child.
- App.js is Parent.js's parent component.
- to start props in class component, we need the following lines
  constructor(props){
      super(props)
  }
- to start props in functional component, we need to pass props in parameter
  function myFunc(props){
      DoThis
  }

## event handling in react
- event handling in functional component: function keyword can be used.
- in class component: only arrow functions can be used.