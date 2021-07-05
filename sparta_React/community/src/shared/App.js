import React from 'react';
import {Route} from 'react-router-dom'

import PostList from '../pages/PostList';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={PostList}/>
    </div>
  );
}

export default App;
