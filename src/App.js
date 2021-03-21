import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React from 'react';
import './App.css';
import SearchPage from './Components/SearchPage.js';


function App() {
  
 
  
  return (
    <main className="App">
      <DndProvider backend={HTML5Backend}>
        <SearchPage />
      </DndProvider>
    </main>
  );
}



export default App;
