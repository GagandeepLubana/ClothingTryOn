import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
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
