import React, { Component } from 'react';
import './App.css';
import CommentsList from './comments/CommentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Comment Feed</h1>
        <button onClick={this.resetCommentFeed}>Reset comment feed</button>
        <CommentsList triggerRender={Date.now()}/>
      </div>
    );
  }

  private resetCommentFeed = async () => {
    await fetch('/api/reset-comments', {
      method: 'post'
    });
    this.forceUpdate();
  }
}


export default App;
