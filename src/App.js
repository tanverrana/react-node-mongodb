import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/add" element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
