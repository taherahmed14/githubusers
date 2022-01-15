import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={ <PrivateRoute>
          <Navbar />
          <Dashboard />
        </PrivateRoute> }></Route>
      </Routes>
    </div>
  );
}

export default App;
