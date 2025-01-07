```javascript
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Users() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split('/').pop();
  //If you need to use useParams: 
  //const { userId } = useParams();
  return (
    <div>
      {userId ? <div>User {userId}</div> : <div>Select a user</div>}
       <button onClick={() => navigate('/users/123')}>Go to user 123</button>
    </div>
  );
}
```