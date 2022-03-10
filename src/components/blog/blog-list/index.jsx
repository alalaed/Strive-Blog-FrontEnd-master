import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { useEffect, useState } from "react";

// const apiUrl = process.env.REACT_APP_BE_URL;

const BlogList = () => {
  const [blogs, setBlogs] = useState(null);

  const getAllBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs");
    const body = await response.json();
    // console.log(body);
    setBlogs(body);
  };

  useEffect(() => getAllBlogs(), []);

  return (
    <Row>
      {console.log("those r the fucking blogs" + blogs)}
      {blogs &&
        blogs.map((blog) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem
              key={blog.title}
              title={blog.title}
              author={blog.author}
              _id={blog._id}
              cover={blog.cover}
            />
          </Col>
        ))}
    </Row>
  );
};

export default BlogList;
