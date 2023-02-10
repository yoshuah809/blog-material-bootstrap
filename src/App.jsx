import Form from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEditBlog from "./pages/AddEditBlog";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBlog" element={<AddEditBlog />} />
        <Route path="/editBlog/:id" element={<AddEditBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
