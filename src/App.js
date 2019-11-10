import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <Routes/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
