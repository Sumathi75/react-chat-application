import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Chatbox' element={<Chatbox/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
