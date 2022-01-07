import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Course from './components/Course/Course';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import PrivateOutlet from './components/PrivateRoute/PrivateOutlet';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="course" element={<Course />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
