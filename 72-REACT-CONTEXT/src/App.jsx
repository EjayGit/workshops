import { BrowserRouter, Routes, Route } from "react-router";
import {UserProvider} from "./components/UserContext";

export default function App(){
  return(
    <BrowserRouter>
      <UserProvider> //
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/users/:username' element={<UserPage />} /> */}
        </Routes>
      </UserProvider> //
    </BrowserRouter>
  )
}
