import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablesPage from "./Components/TablePage.jsx";
import TableMenuPage from "./Components/TableMenuPage.Jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TablesPage />} />
        <Route path="/table/:name" element={<TableMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
