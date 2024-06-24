import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./Pages/About";
import Games from "./Pages/Games";
import View from "./Pages/View";
import Join from "./Pages/Join";
import Contact from "./Pages/Contact";
import AdminForm from "./Pages/Admin/CreateGames";
import Blog from "./Pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/view/game" element={<View />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game-upload" element={<AdminForm />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
