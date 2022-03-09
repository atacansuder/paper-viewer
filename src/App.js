import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import MainScreen from "./components/Main/MainScreen";
import Footer from "./components/Main/Footer";

import AuthorsScreen from "./components/Authors/AuthorsScreen";
import PaperScreen from "./components/Papers/PaperScreen";
import AuthorPage from "./components/Authors/AuthorPage";

/*async function getSingleDoc(db, path) {
  const singleSnapshop = await getDoc(doc(db, path));
  const result = singleSnapshop.data();
  return result;
}*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="paper-viewer/" element={<MainScreen />} />
        <Route path="paper-viewer/paper-viewer" element={<MainScreen />} />
        <Route path="paper-viewer/authors" element={<AuthorsScreen />} />
        <Route
          path="paper-viewer/authors/:author_id"
          element={<AuthorPage />}
        />
        <Route path="paper-viewer/papers" element={<PaperScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
