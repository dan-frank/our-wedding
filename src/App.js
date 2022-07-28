import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "normalize.css";

import HomeRoute from "./routes/Home";
import GalleryRoute from "./routes/Gallery";
import Nav from "./components/nav";
import ScrollToTop from "./wrappers/scroll-to-top";

function App() {
  return (
    <Router>
      <div class="main">
        <ScrollToTop>
          <Nav />
          <Routes>
            <Route exact path="/" element={<HomeRoute />}></Route>
            <Route exact path="/gallery" element={<GalleryRoute />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
