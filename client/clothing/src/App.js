import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginButton from "./pages/auth/LogInButton";
import LogOutButton from "./pages/auth/LogOutButton";
import Main from "./pages/TryOn";

function App() {
  return (
    <div className="bg-primary text-textPrimary">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/tryon" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
