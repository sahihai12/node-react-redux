import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../resuable/Container";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../../../Redux/Actions/blog.action";

const BlogCreate = () => {
  const dispatch = useDispatch();

  const [formfield, setformfield] = useState({
    title: "",
    description: "",
    excerpt: "",
    category: [],
    blogImage: "",
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  let arr = formfield.category;
  const handleCheckBox = (value) => {
    if (!arr.includes(value)) {
      setformfield({
        ...formfield,
        category: [...arr, value],
      });
    } else {
      let removedArr = arr.filter((el) => el !== value);
      setformfield({
        ...formfield,
        category: [...removedArr],
      });
    }
  };

  const [content, setContent] = useState("");
  useEffect(() => {
    setformfield({
      ...formfield,
      description: content,
    });
  }, [content]);

  const [file, setfile] = useState("");
  const handleImage = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
    setformfield({
      ...formfield,
      blogImage: e.target.files[0],
    });
  };


  const submitForm = (e) => {
    e.preventDefault();
    let token = JSON.parse(sessionStorage.getItem("user")).token;
    let fd = new FormData();
    for (const [key, value] of Object.entries(formfield)) {
      if (key === "category") {
        console.log("inside json form ", key, ": ", value);
        fd.append(key, JSON.stringify(value));
      } else {
        fd.append(key, value);
      }
    }
    dispatch(createBlog(fd, token));
  };

  return (
    <div className="create_blog">
      <Container>
        <form
          className="flex flex-wrap"
          onSubmit={(e) => submitForm(e)}
          encType=""
        >
          <div className="field w-full my-3">
            {file && (
              <img src={file} alt="Featured Image" className={"w-full"} />
            )}
            <p className="flex mt-5 items-center">
              Featured Image :
              <label
                htmlFor="blogImage"
                className="ml-3 text-white p-2 b-radius bg-blue-500"
              >
                {file ? "Change Image" : "Upload Image"}
              </label>
            </p>
            <input
              type="file"
              accept="image/*"
              id="blogImage"
              className="hidden"
              onChange={handleImage}
            />
          </div>

          <div className="field w-full mb-3">
            <label htmlFor="title">Enter Title :</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title"
              className="w-full p-3 bg-transparent shadow-lg"
              onChange={(e) =>
                setformfield({ ...formfield, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex w-full">
            <div className="w-full md:w-4/6">
              <label htmlFor="excerpt">Blog Excerpt</label>
              <textarea
                id="excerpt"
                name="excerpt"
                placeholder="Enter a excerpt"
                rows={5}
                className="w-full bg-transparent shadow-lg p-3 my-3"
                onChange={(e) =>
                  setformfield({
                    ...formfield,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="w-full md:w-2/6 px-3">
              <input
                type="text"
                placeholder="Enter a new category"
                className="my-2 bg-transparent shadow-lg p-3 w-full"
              />
              <div className="field w-full">
                <input
                  type="checkbox"
                  name="category"
                  value="food"
                  id="food"
                  onChange={(e) => handleCheckBox(e.target.value)}
                />
                <label htmlFor="food" className="capitalize ml-2 text-lg">
                  Food
                </label>
              </div>
              <div className="field w-full">
                <input
                  type="checkbox"
                  name="category"
                  value="Blog"
                  id="Blog"
                  onChange={(e) => handleCheckBox(e.target.value)}
                />
                <label htmlFor="Blog" className="capitalize ml-2 text-lg">
                  Blog
                </label>
              </div>
              <div className="field w-full">
                <input
                  type="checkbox"
                  name="category"
                  value="travel"
                  id="travel"
                  onChange={(e) => handleCheckBox(e.target.value)}
                />
                <label htmlFor="travel" className="capitalize ml-2 text-lg">
                  travel
                </label>
              </div>
              <div className="field w-full">
                <input
                  type="checkbox"
                  name="category"
                  value="Tourist"
                  id="Tourist"
                  onChange={(e) => handleCheckBox(e.target.value)}
                />
                <label htmlFor="Tourist" className="capitalize ml-2 text-lg">
                  Tourist
                </label>
              </div>
            </div>
          </div>

          <div className="text_editor w-full">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={(e) => setContent(e)}
              modules={modules}
            />
          </div>

          <button
            type="submit"
            className="bg-primary my-5 py-3 px-7 text-white font-bold b-radius"
            onClick={(e) => submitForm(e)}
          >
            Create Blog
          </button>
        </form>
      </Container>
    </div>
  );
};

export default BlogCreate;
