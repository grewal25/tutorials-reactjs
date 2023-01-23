import { createContext } from 'react';
import './App.css';
import ListMovie from './components/ListMovies';
import Test from './components/Test';

export const MyContext = createContext();
function App() {
  return (
    <>
    <ListMovie />
    {/* <Test /> */}
{/*       
      <MyContext.Provider value="Hello World">
      <SomeComponent />
    </MyContext.Provider>
      <Forms /> */}
    </>
     
   
  );
}

export default App;
