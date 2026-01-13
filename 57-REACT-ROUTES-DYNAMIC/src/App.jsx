import { Routes, Route } from 'react-router'
import UserPage from './components/UserPage'
import UserPostsPage from './components/UserPostsPage'
import UserLikesPage from './components/UserLikesPage'
import SortOrderForm from './components/SortOrderForm'

export default function App(){
  return (
    <>
      <Routes>
        <Route path={'/'} element={<SortOrderForm/>}/>
        <Route path={'/users/:username'} element={<UserPage />}>
          <Route path={'posts'} element={<UserPostsPage/>}/>
          <Route path={'likes'} element={<UserLikesPage/>}/>
        </Route>
      </Routes>
    </>
  );
}
