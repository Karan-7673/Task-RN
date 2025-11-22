import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablesPage from "./Components/TablePage.jsx";
import TableMenu from "./Components/TableMenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TablesPage />} />
        <Route path="/table/:name" element={<TableMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
