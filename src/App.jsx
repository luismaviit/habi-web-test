import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Sales from "./pages/sales/Sales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sales/*" element={<Sales />} />
    </Routes>
  );
}

export default App;
