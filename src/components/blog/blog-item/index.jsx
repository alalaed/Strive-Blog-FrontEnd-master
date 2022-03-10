import React from "react";
import { Card, Button } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
const BlogItem = ({ title, cover, author, _id }) => {
  return (
    <Link to={`/blog/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...author} />
          <Button>Edit</Button>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
