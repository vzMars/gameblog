import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import RequireAuth from './components/RequireAuth';
import RequireGuest from './components/RequireGuest';
import ScrollToTop from './components/ScrollToTop';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import LatestNews from './pages/LatestNews';
import NewsByTag from './pages/NewsByTag';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import NotFound from './pages/NotFound';

// layouts
import Layout from './layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route element={<RequireGuest />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='create' element={<CreatePost />} />
            <Route path='news' element={<LatestNews />} />
            <Route path='news/:id' element={<PostDetails />} />
            <Route path='user/:username' element={<Profile />} />
            <Route path='tag/:tag' element={<NewsByTag />} />
            <Route path='edit/:id' element={<EditPost />} />
          </Route>

          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='404' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
