import logo from "./logo.svg";
import "./App.css";

import PaperScreen from "./components/PaperScreen";
import Footer from "./components/Footer";

import db from "./firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

async function getPapers(db) {
  const papersCol = collection(db, "papers");
  const papersSnapshot = await getDocs(papersCol);
  const papersList = papersSnapshot.docs.map((doc) => doc.data());
  return papersList;
}

async function getSingleDoc(db, path) {
  const singleSnapshop = await getDoc(doc(db, path));
  const result = singleSnapshop.data();
  return result;
}

function App() {
  const papers = getPapers(db);
  papers.then((pog) => {
    console.log(pog[0]);
    console.log("Authors: " + JSON.stringify(pog[0].authors[0]));
    const clueless = getSingleDoc(db, pog[0].authors[0].path);
    clueless.then((paaaag) => {
      console.log(paaaag);
    });
  });

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
