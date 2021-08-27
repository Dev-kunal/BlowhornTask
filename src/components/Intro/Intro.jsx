import "./intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <section className="section1">
        <img
          className="intro-img"
          src="https://cdn.devdojo.com/images/december2020/productivity.png"
        />
        <div className="intro-para">
          <h3>Boost productivity</h3>
          {/* <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint id
            vitae quaerat neque magnam minima quae dolores.? Praesentium vitae,
            deleniti enim esse ipsam eum repellat quaerat! Expedita maxime minus
            aliquam assumenda ab veritatis, consequatur quo, harum cupiditate at
            quaerat? Mollitia!
          </p> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint id
            vitae quaerat neque magnam minima quae dolores.
            <ul style={{ paddingLeft: "0" }}>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle "></i>
                </span>
                Maximize productivity and growth
              </li>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle "></i>
                </span>
                Maximize productivity and growth
              </li>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle"></i>
                </span>
                Maximize productivity and growth
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section className="section2">
        <div className="intro-para">
          <h3>Automated Tasks</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint id
            vitae quaerat neque magnam minima quae dolores.{" "}
            <ul style={{ paddingLeft: "0" }}>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle "></i>
                </span>
                Maximize productivity and growth
              </li>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle "></i>
                </span>
                Maximize productivity and growth
              </li>
              <li className="intro-list">
                <span>
                  {" "}
                  <i class="fas fa-circle"></i>
                </span>
                Maximize productivity and growth
              </li>
            </ul>
          </p>
        </div>
        <img
          className="intro-img"
          src="https://cdn.devdojo.com/images/december2020/settings.png"
        />
      </section>
    </div>
  );
};
