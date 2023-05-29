import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const BlogPost = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DOMAIN_URL}blog/${id}`).then((res) =>
      res.json().then((res) => {
        setBlogData(res.data);
      })
    );
  }, []);

  return (
    <div className="blog-details-container">
      <>
        <div className="title">
          <h2>{blogData.title}</h2>
          <small>{blogData.createdAt}</small>
        </div>
        <div className="edit">
          <Link to={`/edit/${id}`}>
            <FaEdit />
            <span>Edit</span>
          </Link>
        </div>
        <div className="image">
          <img src={blogData.cover} alt="cover" />
        </div>
        <div className="content">
          <div
            dangerouslySetInnerHTML={{ __html: blogData.content }}
            className="content"
          />
        </div>
      </>
    </div>
  );
};

export default BlogPost;
