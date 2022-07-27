import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeRoute from "./routes/Home";
import GalleryRoute from "./routes/Gallery";

function App() {
  return (
    <Router>
      <div class="main">
        <Routes>
          <Route exact path="/" element={<HomeRoute />}></Route>
          <Route exact path="/gallery" element={<GalleryRoute />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
