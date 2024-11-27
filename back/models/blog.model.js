const { string, array } = require("joi");
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    featured_image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    twiter: {
      type: String,
      required: false,
    },
    wahtsapp: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
