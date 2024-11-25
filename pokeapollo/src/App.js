import "./App.css";
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Pokemon DS' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Homepage />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
