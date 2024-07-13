import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/assets/components/Header';
import Home from '../src/assets/components/Home';
import Trasporti from '../src/assets/pages/Trasporti';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Header /> {/* Assicurati che l'header sia sempre visibile */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trasporti" element={<Trasporti />} />
      </Routes>
    </BrowserRouter>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App
