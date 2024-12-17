import React from 'react';
import './styles.css';

function FragmentContent() {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <p>This is a sample paragraph to show how React Fragments work.</p>
      <img src="/assets/Images/nature.jpg" alt="Nature" className="myImage" />
    </div>
  );
}

export default FragmentContent;
