import React from "react";
import Container from "./Container";

const Breadcrumb = ({ url, all, span }) => {
  return (
    <section
      className="breadcrumb_section"
      style={{
        background: "url(" + url + ")",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="py-15 lg:py-32 text-center">
          <h1 className="font-black text-5xl text-white">
            {all || ""} <span className="primary font-bold">{span}</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
