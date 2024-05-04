
import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board';
import AppContext from './contexts/Contexts';
import { reducer } from './reducer/Reducer';

function App() {

  const [appState,dispatch] = useReducer(reducer,{x:20})
  const provideState = {
    appState,
    dispatch
  }
  return (
    <AppContext.Provider value = {{provideState}}>
    <div className="App">
    <Board/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
