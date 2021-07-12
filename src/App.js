import React from 'react';
import Lifecycle from './Lifecycle.js';
 import FetchCard from './FetchCard';
import ProgressBar from './ProgressBar/ProgressBar';
// import ResizeApp from './ResizeApp';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Lifecycle></Lifecycle>
      <FetchCard></FetchCard>
      <ProgressBar></ProgressBar>
    </div>
  );
}

export default App;
