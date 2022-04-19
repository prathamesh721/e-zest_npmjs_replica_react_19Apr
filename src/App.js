import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Article from "./pages/Article";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <h1>npmjs Replica</h1>
      <Navbar />
      <Header />
     
      <Article />
      <Footer />
      
    </div>
  );
}

export default App;
