import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./home";
import { Page1 } from "./page1";
import { Page2 } from "./page2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/p/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Home />
        <Page1 />
        <Page2 />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          render={({ match: { url } }) => (
            <>
              <div>###</div>
              <Routes>
                {console.log("##")}
                {console.log(url)}
                {console.log("##")}
                <Route exact path="p" element={<Page1 />} />
              </Routes>
            </>
          )}
        />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
