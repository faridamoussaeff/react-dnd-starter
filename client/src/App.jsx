import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import Backed from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={Backed}>
      <Header />
      <Homepage />
    </DndProvider>
  );
};

export default App;
