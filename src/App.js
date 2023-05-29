import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBlog from "./pages/CreateBlog";
import Home from "./components/Home";
import EditBlog from "./pages/EditBlog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/blog/:id" element={<BlogPost />}></Route>
          <Route path="/edit/:id" element={<EditBlog />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
