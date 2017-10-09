import React, { Component } from 'react';
import Styles from './style.scss';
import Nav from '../../components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className={ Styles.main }>
        <Nav />
        <div className={ Styles['right-box'] }></div>
        <div className={ Styles['left-box'] }></div>
        <h1 className={ Styles.title }>Front-End Developer</h1>
      </div>
    );
  }
}

export default App;
