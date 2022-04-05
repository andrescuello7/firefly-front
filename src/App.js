import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './ui/screens/homePage';
import ProfilePage from './ui/screens/profilePage';
import LoginPage from './ui/screens/loginPage';
import RegisterPage from './ui/screens/registerPage';
import DateTimePage from './ui/screens/dateTimePage';
import StatusPage from './ui/screens/statusPage';
import AdminPage from './ui/screens/adminPage';
import MenuOpcion from './ui/components/menuOptions';
import NavbarOpcion from './ui/components/navbarComponent';

function App() {
  return (
    <BrowserRouter className="App">
      <div className="displayPhone">
        <NavbarOpcion />
      </div>
      <Routes>
        <Route path="/" element={
          <div>
            <div className='displayDestopk'>
              <MenuOpcion />
            </div>
            <HomePage />
          </div>
        } />
        <Route path="/profile" element={
          <div>
            <div className='displayDestopk'>
              <MenuOpcion />
            </div>
            <ProfilePage />
          </div>
        } />
        <Route path="/time" element={
          <div>
            <div className='displayDestopk'>
              <MenuOpcion />
            </div>
            <DateTimePage />
          </div>
        } />
        <Route path="/status" element={
          <div>
            <div className='displayDestopk'>
              <MenuOpcion />
            </div>
            <StatusPage />
          </div>
        } />
        <Route path="/admin" element={
          <div>
            <div className='displayDestopk'>
              <MenuOpcion />
            </div>
            <AdminPage />
          </div>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
