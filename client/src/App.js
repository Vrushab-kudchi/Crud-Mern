import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar';
import User from './Page/user';
import { Route, Routes } from "react-router-dom"
import Userform from './Components/Userform';
import Editform from './Components/EditForm';
import HomePage from './Page/Homepage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/user' element={<User />} />
        <Route path='/adduser' element={<Userform />} />
        <Route path='/edit/:id' element={<Editform />} />
      </Routes>
    </div>
  );
}

export default App;
