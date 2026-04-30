import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>

      </>
  )
}

export default App
