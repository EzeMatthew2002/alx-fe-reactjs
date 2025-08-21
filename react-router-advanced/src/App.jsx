import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet, useParams } from 'react-router-dom';
import Profile from './routes/Profile';
import Home from './routes/Home';
import PostPage from './routes/PostPage';
import Login from './routes/Login';

// simple auth context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  // redirect to /login if not authenticated
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App(){
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
          <Link to="/posts/1" style={{ marginRight: 10 }}>Post/1</Link>
          {!user ? <Link to="/login">Login</Link> : <span>Welcome, {user}</span>}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected route example */}
          <Route path="/profile" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />

          {/* Dynamic routing example */}
          <Route path="/posts/:postId" element={<PostPage />} />

          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
