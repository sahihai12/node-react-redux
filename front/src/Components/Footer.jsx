import React, { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Container from "./resuable/Container";

const Footer = () => {
  const [apptheme, setapptheme] = useState("");
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    setapptheme(theme);
  }, [theme]);

  if (apptheme === "dark") {
    document.documentElement.style.setProperty("--primary", "#e32879");
    document.documentElement.style.setProperty("--header", "#212529");
    document.documentElement.style.setProperty("--body-color", "#fff");
    document.documentElement.style.setProperty("--body-bg", "#222");
    document.documentElement.style.setProperty("--abs_content", "#fffff26");
  } else {
    document.documentElement.style.setProperty("--primary", "#ff5d00");
    document.documentElement.style.setProperty("--header", "#efefef");
    document.documentElement.style.setProperty("--body-bg", "#fff");
    document.documentElement.style.setProperty("--body-color", "#222");
    document.documentElement.style.setProperty("--abs_content", "#00000026");
  }

  return (
    <>
      <div className="toogle_theme">
        {theme === "dark" ? (
          <button onClick={() => dispatch({ type: "light" })}>
            <MdLightMode />
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "dark" })}>
            <MdNightlight />
          </button>
        )}
      </div>
      <footer className="py-16 card_bg">
        <Container>
          <h2 className="rob-cond text-3xl capitalize font-bold text-center">
            footer
          </h2>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
