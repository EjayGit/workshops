import { Routes, Route, Link } from 'react-router'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import NavigationBar from './components/NavigationBar'
import UserProfile from './components/UserProfile'
import Staff from './components/Staff'
import StaffMember from './components/StaffMember'

export default function App(){
  return (
    <div className='App'>
      <h1>Welcome to my website</h1>
      {/* The following line links the words 'About' to the route '/about'. */}
      <nav>
        <NavigationBar/>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/path'} element={<AboutPage />} />
        <Route path={'/:userProfile'} element={<UserProfile/>} />
        <Route path={'/staff'} element={<Staff/>}>
          <Route path={':staffMember'} element={<StaffMember/>}/>
        </Route>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}