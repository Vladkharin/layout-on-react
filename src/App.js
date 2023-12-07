import React from 'react';
import './styles.css';
import './media.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
