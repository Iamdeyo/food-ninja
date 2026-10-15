import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import BlogPage from "./pages/BlogPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <main className="px-5 max-w-275 mx-auto pb-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
