import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  CREATE_BLOGS_REQUEST,
  CREATE_BLOGS_SUCCESS,
  CREATE_BLOGS_FAILURE,
} from "../constants/blog.constant";

export const fetchBlogsRequest = () => {
  return {
    type: FETCH_BLOGS_REQUEST,
  };
};

export const fetchBlogsSuccess = (users) => {
  return {
    type: FETCH_BLOGS_SUCCESS,
    payload: users,
  };
};

export const fetchBlogsFailure = (error) => {
  return {
    type: FETCH_BLOGS_FAILURE,
    payload: error,
  };
};

export const generateBlogSucess = (data) => {
  return {
    type: CREATE_BLOGS_SUCCESS,
    blog : data
  };
};
export const createBlogFailure = (error) => {
  return {
    type: CREATE_BLOGS_FAILURE,
    payload: error,
  };
};

export const getALlBlogs = () => {
  return (dispatch) => {
    dispatch(fetchBlogsRequest());
    axios
      .get("http://localhost:9090/blog/all")
      .then((response) => {
        // response.data is the users
        const blogs = response.data;
        dispatch(fetchBlogsSuccess(blogs));
      })
      .catch((error) => {
        dispatch(fetchBlogsFailure(error.message));
      });
  };
};

export const createBlog = (formdata , token) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9090/blog/create", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization" : token
        }
      })
      .then((response) => {
        // response.data is the users
        dispatch(generateBlogSucess(response.data));
      })
      .catch((error) => {
        dispatch(createBlogFailure(error.response.data));
      });
  };
};

export const getSingleBlog = (id) => {
  console.log('url string ' , `http://localhost:9090/blog/getsingle/${id}`);
  return (dispatch) => {
    axios
      .get(`http://localhost:9090/blog/getsingle/${id}`)
      .then((response) => {
        // response.data is the users
        console.log('resposne data is ', response.data);

        dispatch(generateBlogSucess(response.data))
      })
      .catch((error) => {
        return error
      });
  };
};
