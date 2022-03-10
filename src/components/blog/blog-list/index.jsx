import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs");
    const body = await response.json();
    console.log(body);
    setBlogs(body);
  };

  useEffect(() => getAllBlogs(), []);

  return (
    <Row>
      {blogs.map((blog) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
