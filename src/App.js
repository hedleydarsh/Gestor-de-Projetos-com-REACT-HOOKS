import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header/';
import Board from './components/Board';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header></Header>
      <Board></Board>
      <GlobalStyle />
    </DndProvider>

  );
}

export default App;
