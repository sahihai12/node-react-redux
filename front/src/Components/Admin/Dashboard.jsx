import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../resuable/Container";
import "./admin.css";
import { MdModeEditOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal/Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const toogle = (val) => {
    setModal(val);
  };
  return (
    <>
      <section className="admin_section">
        <Container>
          <div className="flex p-3">
            <div className="w-full md:w-3/6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-3/6">
                  <div className="card_bg box shadow-lg m-3 p-5 text-center">
                    <h2 className="rob-cond text-3xl font-bold mb-3">
                      Total Product's
                    </h2>
                    <h2 className="text-3xl font-bold primary">200</h2>
                  </div>
                </div>
                <div className="w-full md:w-3/6">
                  <div className="card_bg box shadow-lg m-3 p-5 text-center">
                    <h2 className="rob-cond text-3xl font-bold mb-3">
                      Total Blog's
                    </h2>
                    <h2 className="text-3xl font-bold primary">197</h2>
                  </div>
                </div>
                <div className="w-full md:w-3/6">
                  <div className="card_bg box shadow-lg m-3 p-5 text-center">
                    <h2 className="rob-cond text-3xl font-bold mb-3">
                      Booked Order's
                    </h2>
                    <h2 className="text-3xl font-bold primary">200</h2>
                  </div>
                </div>
                <div className="w-full md:w-3/6">
                  <div className="card_bg box shadow-lg m-3 p-5 text-center">
                    <h2 className="rob-cond text-3xl font-bold mb-3">
                      Cancel Order's
                    </h2>
                    <h2 className="text-3xl font-bold primary">197</h2>
                  </div>
                </div>
              </div>
              <div className="recent_products card_bg p-3 m-3">
                <div className="flex items-center justify-between mb-4 text-2xl ">
                  <h2 className=" rob-cond  font-bold">Recent Product's</h2>
                  <Link
                    to="/dashboard/product"
                    className="rob-cond  font-bold text-xl"
                  >
                    All Products
                  </Link>
                </div>
                <ul>
                  <li className="flex mb-3">
                    <div className="img w-44">
                      <img
                        src="https://source.unsplash.com/random/170x170/?girl,top"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="content ml-2">
                      <Link to={"/dashboard/blog"}>
                        <h2 className="font-bold rob-cond text-xl mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat, facere!
                        </h2>
                        <p className="font-bold mb-1">
                          Total Qunatity
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">30</span>
                        </p>
                        <p className="font-bold mb-1">
                          Regular Price
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">
                            $ 130.98
                          </span>
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="flex mb-3">
                    <div className="img w-44">
                      <img
                        src="https://source.unsplash.com/random/170x170/?girls"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="content ml-2">
                      <Link to={"/dashboard/blog"}>
                        <h2 className="font-bold rob-cond text-xl mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat, facere!
                        </h2>
                        <p className="font-bold mb-1">
                          Total Qunatity
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">30</span>
                        </p>
                        <p className="font-bold mb-1">
                          Regular Price
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">
                            $ 130.98
                          </span>
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="flex mb-3">
                    <div className="img w-44">
                      <img
                        src="https://source.unsplash.com/random/170x170/?girl"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="content ml-2">
                      <Link to={"/dashboard/blog"}>
                        <h2 className="font-bold rob-cond text-xl mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat, facere!
                        </h2>
                        <p className="font-bold mb-1">
                          Total Qunatity
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">30</span>
                        </p>
                        <p className="font-bold mb-1">
                          Regular Price
                          <span className="mx-1">:</span>
                          <span className="font-bold rob-cond primary">
                            $ 130.98
                          </span>
                        </p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-3/6">
              <div className="wrapper m-3">
                <div className="flex my-6">
                  <div className="card_bg p-3 w-full">
                    <div className="flex items-center justify-between  mb-4 ">
                      <h2 className="text-4xl text-center rob-cond font-bold">
                        Personal Info
                      </h2>
                      <Link to={"/edit/profile"} className="text-3xl hidden">
                        <FaEdit />
                      </Link>
                      <div
                        className="edit text-3xl"
                        onClick={() => setModal(true)}
                      >
                        <FaEdit />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="img text-center">
                        <img
                          src="https://source.unsplash.com/random/170x170/?user"
                          alt=""
                          className="rounded mx-auto"
                        />
                      </div>
                      <div className="card_body ml-3">
                        <h3 className="font-bold text-lg rob-cond">
                          Name
                          <span className="mx-1">:</span>
                          <span className="text-lg rob-cond">Full Name </span>
                        </h3>
                        <h3 className="font-bold text-lg rob-cond">
                          UserName
                          <span className="mx-1">:</span>
                          <span className="text-lg rob-cond">User Name </span>
                        </h3>
                        <h3 className="font-bold text-lg rob-cond">
                          Email
                          <span className="mx-1">:</span>
                          <span className="text-lg rob-cond">
                            skp218765@gmail.com{" "}
                          </span>
                        </h3>
                        <h3 className="font-bold text-lg rob-cond">
                          Contact
                          <span className="mx-1">: +91</span>
                          <span className="text-lg rob-cond">9856784598</span>
                        </h3>
                        <h3 className="font-bold text-lg rob-cond">
                          Password
                          <span className="mx-1">:</span>
                          <span className="text-lg rob-cond">
                            Password Hashed
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="recent_blogs card_bg p-3 mt-4">
                  <div className="flex items-center justify-between mb-4 text-2xl ">
                    <h2 className=" rob-cond  font-bold">Recent Blog's</h2>
                    <Link
                      to="/dashboard/blog"
                      className="rob-cond  font-bold text-xl"
                    >
                      All Blogs
                    </Link>
                  </div>
                  <ul>
                    <li className="flex mb-3">
                      <div className="img w-44">
                        <img
                          src="https://source.unsplash.com/random/170x170/?girls,top"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="content ml-2">
                        <Link to={"/dashboard/blog"}>
                          <h2 className="font-bold rob-cond text-xl mb-1">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </h2>
                          <p className="font-bold mb-1 ellipsis">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum recusandae nobis quos explicabo culpa
                            earum ipsum autem.
                          </p>
                        </Link>
                      </div>
                    </li>
                    <li className="flex mb-3">
                      <div className="img w-44">
                        <img
                          src="https://source.unsplash.com/random/170x170/?girls,blog"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="content ml-2">
                        <Link to={"/dashboard/blog"}>
                          <h2 className="font-bold rob-cond text-xl mb-1">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </h2>
                          <p className="font-bold mb-1 ellipsis">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum recusandae nobis quos explicabo culpa
                            earum ipsum autem.
                          </p>
                        </Link>
                      </div>
                    </li>
                    <li className="flex mb-3">
                      <div className="img w-44">
                        <img
                          src="https://source.unsplash.com/random/170x170/?blog"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="content ml-2">
                        <Link to={"/dashboard/blog"}>
                          <h2 className="font-bold rob-cond text-xl mb-1">
                            Your most unhappy customers are your greatest source
                            of learning.
                          </h2>
                          <p className="font-bold mb-1 ellipsis">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum recusandae nobis quos explicabo culpa
                            earum ipsum autem.
                          </p>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* user deatils modal */}
      {modal && (
        <Modal changeShow={() => setModal(false)}>
          <form>
            <div className="mb-2">
              <div className="img">
                <img
                  src="https://source.unsplash.com/random/150x150/?user"
                  alt=""
                  className="b-radius"
                />
                <label for="image">
                  <MdModeEditOutline className="text-xl primary" />
                </label>
              </div>
              <input type="file" name="profile" id="image" className="hidden" />
            </div>
            <div className="input_fileds">
              <div className="mb-2">
                <label for="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="username"
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <label for="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  disabled
                />
              </div>
              <div className="mb-2">
                <label for="contact">Contact</label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="+91 9129898329"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              type="submit"
              class="mx-auto py-2 px-6 mt-4 border b-radius primary"
            >
              Update
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
