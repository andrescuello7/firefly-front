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

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/time" element={<DateTimePage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
