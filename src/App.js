import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Python from "./Python";
import ML from "./ML";
import Enquiry from "./Enquiry";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      		<BrowserRouter>
				<NavBar/>
				<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/python" element={<Python/>} />
						<Route path="/ml" element={<ML/>} />
						<Route path="/enquiry" element={<Enquiry/>} />
						<Route path="*" element={<Navigate to="/" />} />
				</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
