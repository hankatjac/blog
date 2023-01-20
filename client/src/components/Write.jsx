import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Form from "react-bootstrap/Form";

const Write = () => {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");

  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const handleUpload = () => {
    inputRef.current?.click();
  };
  // setUploadedFileName(inputRef.current.files[0].name) &&

  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setFile(inputRef.current.files[0]);
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-center">wirte a blog</h1>
        <div className="row">
          <div className="col-md-9">
            <input
              className="mb-4 w-100"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <ReactQuill
              className="h-100"
              theme="snow"
              value={value}
              onChange={setValue}
              required
            />
          </div>

          <div className="col-md-3">
            {/* <span>
              <b>Status: </b> Draft
              </span>
              <span>
              <b>Visibility: </b> Public
              </span> */}

            <div className="m-3">
              <label className="mx-3">Choose file: </label>
              <input
                ref={inputRef}
                onChange={handleDisplayFileDetails}
                className="d-none"
                type="file"
                required
              />
              <button
                onClick={handleUpload}
                className={`btn btn-outline-${
                  uploadedFileName ? "success" : "primary"
                }`}
              >
                {uploadedFileName ? uploadedFileName : "Upload"}
              </button>
              {/* <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name=""
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="file" htmlFor="file">
                Upload Image
              </label> */}
            </div>

            <div className="m-3">
              <label className="mx-3">Choose a category: </label>
              {/* <h1> choose a category</h1> */}

              <Form.Check
                type="checkbox"
                label="business"
                checked={cat === "business"}
                name="cat"
                value="business"
                id="business"
                onChange={(e) => setCat(e.target.value)}
              />

              <Form.Check
                type="radio"
                label="culture"
                checked={cat === "culture"}
                name="cat"
                value="culture"
                id="culture"
                onChange={(e) => setCat(e.target.value)}
              />

              <Form.Check
                type="checkbox"
                label="technology"
                checked={cat === "technology"}
                name="cat"
                value="technology"
                id="technology"
                onChange={(e) => setCat(e.target.value)}
              />

              <Form.Check
                type="radio"
                label="quotidian"
                checked={cat === "quotidian"}
                name="cat"
                value="quotidian"
                id="quotidian"
                onChange={(e) => setCat(e.target.value)}
              />
            </div>
            <div className="buttons">
              {/* <button>Save as a draft</button> */}
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Write;
