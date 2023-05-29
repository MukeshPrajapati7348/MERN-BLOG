import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

const Blog = ({ title, summary, cover, id, createdAt }) => {
  return (
    <div className="blog-container">
      {title ? (
        <>
          <div className="image">
            <Link to={`/blog/${id}`}>
              <img src={cover} alt="" />
            </Link>
          </div>
          <div className="blog-details">
            <div className="author-iat">
              {/* <span className="author">by: Mukesh</span> */}
              {/* <small className="issuedAT">
                @{formatISO9075(new Date(createdAt))}
              </small> */}
            </div>
            <div className="blog-title-summary">
              <h3 className="title">{title}</h3>
              <p className="summary">{summary}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
