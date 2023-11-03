import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomHook from "./pages/CustomHook";
import PageNotFound from "./pages/PageNotFound";
import Reducer from "./pages/Reducer";
import './index.css';
import { TestPage } from "./pages/TestPage";

function App() {
  const [click, setClick] = useState(false);
  const handleIconClick = () => {
    if (click) {
      setClick(false)
    } else { setClick(true) };

  }

  return (
    <Router>
      <nav>
        <div>
          <ul className="navbar">
            <li className="nav-links">
              <Link to="/">CustomHook</Link>
              <Link to="/reducer">Reducer</Link>
              <Link to="/testPage">TestPage</Link>
            </li>
          </ul>
        </div>

        <div id="mobile-view" onClick={handleIconClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<CustomHook />}></Route>
          <Route path="reducer" element={<Reducer />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="testPage" element={<TestPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
