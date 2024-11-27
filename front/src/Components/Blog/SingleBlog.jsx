import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../Redux/Actions/blog.action";
import Breadcrumb from "../resuable/Breadcrumb";
import Button from "../resuable/Button";
import SingleSider from "../resuable/slider/SingleSider";

const SingleBlog = () => {
  const [blog, setblog] = useState({});
  const dispatch = useDispatch();
  const singleBlog = useSelector((store) => store);
  const { id } = useParams();
  console.log("blog id is", id);
  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, []);

  console.log("single blog ", singleBlog);

  return (
    <>
      <Breadcrumb
        url={
          "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
        }
        all={"Blog"}
        span={"Deatil's"}
      />

      <div className="py-16">
        <Container>
          <div className="blog_info">
            <h2 className="font-bold text-4xl rob-cond">
              Your most unhappy customers are your greatest source of learning.
            </h2>
            <div className="meta mb-3 mt-1 flex">
              <p className="primary font-black">
                {" "}
                Categories :{" "}
                <span className="text-gray-500 font-semibold">Food</span>
              </p>
              <span className="mx-3">|</span>
              <p className="primary font-black">
                {" "}
                Author :{" "}
                <span className="text-gray-500 font-semibold">User Name</span>
              </p>
              <span className="mx-3">|</span>
              <p className="primary font-black">
                {" "}
                Date :{" "}
                <span className="text-gray-500 font-semibold">
                  2 July , 2022
                </span>
              </p>
            </div>
            <div className="img w-full">
              <img
                src="https://source.unsplash.com/random/1920x700/?girls"
                alt=""
              />
            </div>
            <div className="description_blog_info text-lg  mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                beatae id libero dignissimos ipsa voluptatibus fugiat expedita?
                Cumque quibusdam repellendus nostrum ea minima perferendis
                voluptates odio aperiam error sapiente reiciendis laboriosam
                eaque laborum fugit, alias blanditiis dolores optio beatae ipsa?
              </p>
              <p>
                It’s fresh in just the right kind of way for January – like when
                you want that revitalized feeling that comes from actually
                eating and truly enjoying vegetables, but you also need it to be
                absolutely substantial and satisfying. Maybe we CAN have it all?
                You can plate this salad up individually and swipe through it
                with a piece of soft focaccia – which is what I’m often having
                for a throw-it-together lunch these days. Or, you can do as I
                also often do, which is serving this family-style as a side for
                whatever else you have going on for dinner. Lunch for the
                stay-at-home mom – it works. Dinner parties – it works. A casual
                side for Tuesday dinner – it works. Midnight snack – I mean, I’m
                not above it.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non?
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae omnis vitae esse excepturi fuga, alias laboriosam.
                </li>
              </ul>

              <img
                src="https://source.unsplash.com/random/420x700/?girls"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident error reiciendis laboriosam fugiat ipsum ratione
                adipisci quis quaerat nisi iste quia, cum consectetur
                voluptatibus, quisquam nulla sapiente dolorum recusandae nihil
                itaque natus harum aliquid! Aut itaque dicta, id iste recusandae
                possimus ipsam illum harum. Numquam eum distinctio unde. Ea,
                nulla nobis. Consequatur nisi ratione dolorum veniam inventore
                incidunt ut itaque error repellendus quae, esse dicta excepturi
                delectus repellat distinctio sed voluptatibus, dolor cumque
                iusto nesciunt illum libero quisquam! Error, repellat ab commodi
                aspernatur cumque placeat dolores doloribus cupiditate dolorum
                explicabo!
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="comment_section card_bg py-16">
        <Container>
          <h2 className="font-black rob-cond capitalize text-5xl mb-5">
            <span className="primary font-bold rob-cond">Leave a </span>
            Comment
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:w-2/4">
              <form className="text-left p-4 b-radius shadow-xl">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter UserName"
                  className="w-full mb-2 shadow p-3 capitalize"
                  id="name"
                />

                <label htmlFor="message" className="font-bold">
                  Review
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="write a review"
                  className=" w-full p-3"
                ></textarea>

                <Button title={"Comment"} />
              </form>
            </div>
            <div className="reviews p-3 w-full md:w-2/4">
              <SingleSider type={"comment"} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
