import React from 'react';
import Footer from './Footer';
import Header from './Header';

function App() {
  const displayMessage = (message) => {
    window.alert(message);
  };

  return (
    <div>
      <Header />
      <button onClick={() => displayMessage('Hello World')}>Click me!</button>
      <Footer />
    </div>
  );
}

export default App;