import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
      <span className="tag is-success">
        Bar
        <button class="delete is-small" />
      </span>
      <span class="tag is-warning is-medium">
        Hello
        <button class="delete is-small" />
      </span>
      <span class="tag is-danger is-large">
        World
        <button class="delete" />
      </span>
    </>
    );
  }
}

export default App;
