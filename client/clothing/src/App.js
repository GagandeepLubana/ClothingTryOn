import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginButton from "./pages/auth/LogInButton";
import LogOutButton from "./pages/auth/LogOutButton";

function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
