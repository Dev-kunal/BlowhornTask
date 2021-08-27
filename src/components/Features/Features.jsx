import "./feature.css";

export const Features = () => {
  return (
    <div>
      <div className="feature-header">
        <h2>Our Features</h2>
        <p>cheack out our list of awesome features below</p>
      </div>
      <div className="cards">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <FeatureCard />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className="feature-card">
      <div className="icon-bg">
        <i class="fas fa-file-certificate"></i>
      </div>
      <h5>Certification</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};
