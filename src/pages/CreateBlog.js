import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillModules } from "../components/QuillModules";
import { toast } from "react-hot-toast";
import { image2base64 } from "../components/utility/image2base64";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    summary: "",
    cover: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeQuill = (value) => {
    setBlogData((prev) => {
      return {
        ...prev,
        content: value,
      };
    });
  };

  const handleChangeCover = async (e) => {
    const file = await image2base64(e.target.files[0]);

    setBlogData((prev) => {
      return {
        ...prev,
        cover: file,
      };
    });
  };

  const createBlog = async (e) => {
    e.preventDefault();
    const { title, summary, cover, content } = blogData;
    if (title && summary && cover && content) {
      const response = await fetch(`${process.env.REACT_APP_DOMAIN_URL}blog`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(blogData),
      });

      const res = await response.json();
      if (res.status) {
        toast("Blog created!");
        setTimeout(() => navigate("/"), 500);
      } else {
        toast(res.message);
      }
    } else {
      toast("All fields are required!");
    }
  };

  return (
    <div className="create-blog-container">
      <form className="create-blog-form" onSubmit={createBlog}>
        <div className="title">
          <label htmlFor="titel">Title</label>
          <input
            type="text"
            id="title"
            value={blogData.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <div className="summary">
          <label htmlFor="summary">Name</label>
          <input
            type="text"
            id="summary"
            value={blogData.summary}
            name="summary"
            placeholder="summary"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <label htmlFor="cover">Cover</label>
          <input
            type="file"
            id="cover"
            name="cover"
            accept="image/*"
            placeholder="cover"
            onChange={handleChangeCover}
          />
        </div>
        <div className="content">
          <label htmlFor="content">Content</label>
          <ReactQuill
            id="content"
            theme="snow"
            placeholder="Write about the blog in brief here..."
            value={blogData.content}
            onChange={handleChangeQuill}
            modules={QuillModules.modules}
            formats={QuillModules.formats}
            className="reactQuill"
          />
        </div>
        <button type="submit" className="create-btn">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
