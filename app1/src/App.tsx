import {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React 1</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="/app1/home">Home</Link> | <Link to="/app1/about">About</Link>{" "}
        | <Link to="/app1/feeds">Feeds</Link>
      </nav>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Navigation to other apps */}
      <div className="card">
        <button onClick={() => navigateTo("/app2/")}>Go to App2</button>
        <button onClick={() => navigateTo("/app3/")}>Go to App3</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* React Router Routes */}
      <Routes>
        <Route path="/app1/home" element={<h2>Home Page</h2>} />
        <Route path="/app1/about" element={<h2>About Page</h2>} />
        <Route path="/app1/feeds" element={<h2>Feeds Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
