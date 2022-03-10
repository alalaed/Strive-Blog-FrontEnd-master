import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./styles.css";

const NewBlogPost = () => {
  const postNewBlog = async () => {
    const response = fetch("http://localhost:3001/blogs", { method: "POST" });
  };
  const [body, setBody] = useState(toBePosted);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [text, setText] = useState(text);

  const toBePosted = {
    title: title,
    category: category,
    content: text,
  };

  const handleChangeText = () => {
    setText(text);
  };
  const handleChangeCategory = () => {
    setCategory(category);
  };
  const handleChangeTitle = () => {
    setTitle(title);
  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            value={title}
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group
          controlId="blog-category"
          className="mt-3"
          value={category}
          onChange={handleChangeCategory}
        >
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              value={text}
              onChange={handleChangeText}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
