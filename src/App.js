import React from 'react'
import './App.css';
import Review from './review'

function App() {
  return (
    <div className="container">
        <div className="title">
            <h1>Our Reviews</h1>
        </div>

        <Review />
    </div>
  );
}

export default App;
