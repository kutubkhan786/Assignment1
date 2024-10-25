import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StarWarsCharacters from "./pages/StarWarsCharacters";




import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        
        <main>
        <nav className="HomeSection">
          <StarWarsCharacters />
        </nav>
       

          <Routes>
            {/* <Route path="/" exact component={Front} />
            <Route path="/services" component={Services} />
            <Route path="/customer-reasons" component={CustomerReasons} /> */}
          </Routes>
        </main>
       
      </div>
    </Router>
  );
};

export default App;
