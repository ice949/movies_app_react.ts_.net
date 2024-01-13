import React, { Component } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}


export default App;
