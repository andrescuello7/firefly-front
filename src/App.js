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
import PagosPage from './ui/screens/pagosPage';
import AdminPage from './ui/screens/adminPage';
import NavbarOpcion from './ui/components/navbarHomeComponent';
import NavbarLoginComponent from './ui/components/navbarLoginComponent';

//main App
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <NavbarOpcion />
            <HomePage />
          </div>
        } />
        <Route path="/profile" element={
          <div>
            <NavbarOpcion />
            <ProfilePage />
          </div>
        } />
        <Route path="/time" element={
          <div>
            <NavbarOpcion />
            <DateTimePage />
          </div>
        } />
        <Route path="/status" element={
          <div>
            <NavbarOpcion />
            <StatusPage />
          </div>
        } />
        <Route path="/pagos" element={
          <div>
            <NavbarOpcion />
            <PagosPage />
          </div>
        } />
        <Route path="/admin" element={
          <AdminPage />
        } />
        <Route path="/login" element={
          <div>
            <NavbarLoginComponent />
            <LoginPage />
          </div>
        } />
        <Route path="/register" element={
          <div>
            <NavbarLoginComponent />
            <RegisterPage />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
