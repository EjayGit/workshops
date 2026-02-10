import { BrowserRouter, Routes, Route } from "react-router";
import {UserProvider} from "./components/UserContext";
import Home from './components/Home';
import About from './components/About';
import {UserPage} from './components/UserPage';
import {ThemeProvider} from './components/ThemeContext';


export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider> //
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </ThemeProvider> //
      </UserProvider>
    </BrowserRouter>
  );
}