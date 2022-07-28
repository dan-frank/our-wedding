import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "normalize.css";

import HomeRoute from "./routes/Home";
import GalleryRoute from "./routes/Gallery";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div class="main">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomeRoute />}></Route>
          <Route exact path="gallery" element={<GalleryRoute />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
