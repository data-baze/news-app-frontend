import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NewsScreen from "./screens/NewScreen";
import NewsDetails from "./screens/NewDetails";
import AdminPanel from "./screens/AdminPanel";
import AddPost from "./screens/AddPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NewsScreen />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/add-post" element={<AddPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
