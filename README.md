# README

Facebook React Tutorial 
Source: [Github](https://facebook.github.io/react/tutorial/tutorial.html) | 
[CodePen Starter](https://codepen.io/ericnakagawa/pen/vXpjwZ?editors=0010) | 
[CodePen Finished](https://s.codepen.io/ericnakagawa/debug/ALxakj)

## What is React?

- some good notes here, I should revisit

## Getting Started

- First step for me was to convert the one big index.jsx file into multiple component
files
- when converting, I have to remember to 'export default'.  Here is an example for
the Square component:

**OLD: Square Component** in index.js
```javascript
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}
```

**NEW: Square Component** in square.jsx
```javascript
import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

export default Square;
```
**Update index.jsx**
```javascript
import Square from './square.jsx';
```
*Note:* I did learn, however, because all the Square's are contained within the Board
component, I won't have to import square.js into index.js, only into board.js

- The tutorial starts with a blank tic-tac-toe board.  As a quick run-through, 
there are three components; Game, Board and Square.
- Game renders an encapsulating div.game which has a div.game-board which holds
the Board component.
- Board renders an encapsulating div with a status div and three rows (div.board-row) and
three Square components.
- Square renders a button

## Passing Data Through with Props

- To play around with passing data in, we changed the renderSquare(i) function in board.jsx
to: 
```javascript
return <Square value={i} />;
```
  - instead of just &lt;Square /&gt;, we can pass it the value i.
  - the renderSquare() function is called 9 times, each with a difference value (1, 2, 3, ...)
  to show the counting
- We then changed the value / contents of the Square component:
```javascript
{this.props.value}
```
- That makes sense right now.  I am assuming that 'props' is what the component receives and 
'state' is particular to the component?  We'll see...

## An Interactive Component

- state is private to the component
- we need to initialize it by creating a constructor function.
- we must call super() when defining the constructor of a subclass which Square is (it extends 
or inherits from React.Component)
```javascript
// OLD Square component
<button className="square" onClick={() => alert('click')}>
  {this.props.value}
</button>

// NEW Square component
<button className="square" onClick={() => this.setState({value: 'X'})}>
    {this.state.value}
</button>
```
- onClick function -> When we click on a square, we are 'setting state' and setting 
the value to 'X'.
- To grab that value, we updated the contents of the box to `this.state.value`
- Now, when we click on a box, it throws in an 'X'

- *I now have React DevTools, I probably need to restart Chrome to get it working.*


## Lifting State Up

- Right now, we have state for each Square component.  We could lift the state from each
component but that gets messy.  Instead, we can store state in the Board component and
have Board simply tell each Square what to display
- Going forward, if I have two sibling components that need to talk to each other, move 
the state upwards and have it live in the parent component.
- We added an initial state for the board by setting `this.state` equal to an array called
'squares' with 9 items, defaulted to 'null'
- In the `renderSquare(i)`, we updated it so that the value that we're passing in is coming
from the squares array which we access with `{this.state.squares[i]}`
- I needed to define the handleClick(i) function within the Board component
- Note how whenever Board's state changes, the Square components rerender automatically.
- Square no longer keeps its own state; it receives its value from its parent Board and 
informs its parent when it's clicked. We call components like this controlled components.

### Quick Catch-Up
- Three components: Game (index.js), Board, and Square
- Board is the most complex and holds the state for the game.  It says where there is an 'X' or 'O' 
while Square is just there to render it.
- Board has a method called `renderSquare(i)` that returns a Square component.  It is passing down
two props:
  - the first is the value of the square `value={this.state.squares[i]}`
  - and second is the handleClick method: `onClick={() => this.handleClick(i)}`
    - CM => why isn't handleClick bound somewhere in the constructor?  I thought I'd see this line
    of code somewhere: `this.handleClick = this.handClick.bind(this)`
    - CM => and while we're on the constructor topic, which is it just `constructor()` and not
    `constructor(props)`; same with `super()` and `super(props)`?  I've read somewhere about the 
    difference but I don't remember....worth Googling.
- Board has three divs with class 'board-row' and each one calls the renderSquare() method: 
`{this.renderSquare(0)}` is for the top left square...so 0 through 8
- renderSquare(i) requires an argument, which is the number of square or its place in the squares
array which was initialized in the constructor with that nifty bit of code to create an array with
9 places, all null
- handleClick(i) also receives an argument `i`.  Instead of altering state directly, it creates a
constant called squares, an array, is set equal to what is currently in my state: 
`this.state.squares.slice()`
  - I don't understand what 'slice' does for me.  It seems to work just fine as `this.state.squares`
  when I console.log(squares).  When I console.log(this.state.squares) and the .slice() version is up, 
  the arrays are different...it's like the this.state.squares is always behind one...
  - they address this somewhat in the next section saying they recommend using the .slice() method
  to copy state instead of mutating it...which would suggest to me that:
  `(const squares = this.state.squares) !== (const squares = this.state.squares.slice()).  OK
  - I think in the `const squares = this.state.squares` version, I am mutating state

## Why Immutability Is Important
- Re-read this part on [tracking changes](https://facebook.github.io/react/tutorial/tutorial.html#tracking-changes).
- the biggest benefit of immutability is that it is more easy to determine if the object has been
changed or not
- I should take a look at the immutable.js library

## Functional Components
- We can now delete the constructor from Square.  Without state, we don't even need to define a whole 
new class that extends the Component class, we can just create a stateless functional component
- The biggest changes we did were #1 - the function takes an argument (props) and #2 - we must change
the `this.props` to just `props`

## Taking Turns

## Declaring a Winner

## Storing a History

## Showing the Moves

## Implementing Time Travel


























## Cool Code bits
```javascript
// Give state an array called 'squares' with 9 null values
// I am assuming fill() is a JS function
this.state = {
	squares: Array(9).fill(null),
};
```
