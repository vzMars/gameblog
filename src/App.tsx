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
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
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
            <Route path='news' element={<Posts />} />
            <Route path='profile' element={<Profile />} />
            <Route path='create' element={<CreatePost />} />
          </Route>

          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='404' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
