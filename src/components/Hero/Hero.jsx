import "./hero.css";
export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-heading">
        <span style={{ color: "#181727" }}>Start Crafting Your</span>{" "}
        <span style={{ color: "#7674e2" }}>Next Great Idea</span>
      </h1>
      <p className="hero-para">
        Simplifying the creation of landing pages, blog pages, application pages
        and so muuch more!
      </p>

      <button className="btn-lg">
        Purchase Now <span className="badge">only $15/mon</span>
      </button>

      <br />
      <a style={{ fontSize: "small" }}>Learn More</a>
    </div>
  );
};
