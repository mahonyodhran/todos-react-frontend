import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import Todos from './components/Todos'
import Navbar from './components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Header />
      <Todos />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
