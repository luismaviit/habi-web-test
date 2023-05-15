import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Sales from "./pages/sales/Sales";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales/*" element={<Sales />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
