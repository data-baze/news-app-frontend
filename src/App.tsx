import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NewsScreen from "./screens/NewScreen";
import NewsDetails from "./screens/NewDetails";
import AdminPanel from "./screens/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap most pages inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<NewsScreen />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Route>

        {/* Admin panel can have its own layout if needed */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
