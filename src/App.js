import logo from "./logo.svg";
import "./App.css";

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
      <h1>
        Work in progress! The data shown does not represent actual paper
        content.
      </h1>
      <PaperScreen />
      <Footer />
    </div>
  );
}

export default App;
