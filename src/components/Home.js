import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogsInfo, setBlogsInfo] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DOMAIN_URL}blogs`).then((res) =>
      res.json().then((res) => setBlogsInfo(res.data))
    );
  }, []);

  const dummyData = new Array(10).fill(null);

  return (
    <div className="blogs-container">
      {blogsInfo && blogsInfo.length > 0
        ? blogsInfo.map((blog) => (
            <Blog
              key={blog._id}
              title={blog.title}
              cover={blog.cover}
              summary={blog.summary}
              id={blog._id}
              createdAt={blog.createdAt}
            />
          ))
        : dummyData.map((item, index) => <Blog key={index} />)}
    </div>
  );
};

export default Home;
