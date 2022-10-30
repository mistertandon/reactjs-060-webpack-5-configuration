import React, { Suspense, lazy } from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const User = lazy(async () => await import("./components/User"));
const Home = lazy(async () => await import("./components/Home"));
const GrandParent = lazy(async () => await import("./components/Hereditary"));

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/grand-parent">Grand Parent</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="grand-parent" element={<GrandParent />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
