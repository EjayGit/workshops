import { Routes, Route } from 'react-router'
import UserPage from './components/UserPage'
import UserPostsPage from './components/UserPostsPage'
import UserLikesPage from './components/UserLikesPage'

export default function App(){
  return (
    <>
      <Routes>
        <Route path={'/users/:username'} element={<UserPage />}>
          <Route path={'posts'} element={<UserPostsPage/>}/>
          <Route path={'likes'} element={<UserLikesPage/>}/>
        </Route>
      </Routes>
    </>
  );
}
