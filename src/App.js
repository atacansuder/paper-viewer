import logo from "./logo.svg";
import "./App.css";

import Authors from "./components/Authors";
import PaperScreen from "./components/PaperScreen";
import Footer from "./components/Footer";

/*async function getSingleDoc(db, path) {
  const singleSnapshop = await getDoc(doc(db, path));
  const result = singleSnapshop.data();
  return result;
}*/

function App() {
  return (
    <div className="App">
      <h1>WIP</h1>
      <Authors />
      <Footer />
    </div>
  );
}

export default App;
