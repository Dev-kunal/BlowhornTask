import "./blog.css";

const blogImages = [
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];
export const Blog = () => {
  return (
    <section className="blogs-section">
      <h3 className="blog-heading">The project Blog</h3>
      <span>Design and layout to help you with your app.</span>
      <div className="blogs">
        <div className="blog blog1">
          <img src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
          <div className="blog-content">
            <span className="blog-badge">RESOURCES</span>
            <h2>Refreshing Designs</h2>
            <p style={{ fontSize: "small" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              officiis veritatis autem nihil vero, quod error.
            </p>
          </div>
        </div>
        <div className="blog blog2">
          <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
          <div className="blog-content">
            <span className="blog-badge">RESOURCES</span>
            <h2>Refreshing Designs</h2>
            <p style={{ fontSize: "small" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              officiis veritatis autem nihil vero, quod error.
            </p>
          </div>
        </div>
        <div className="blog blog3">
          <img src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
          <div className="blog-content">
            <span className="blog-badge">RESOURCES</span>
            <h2>Refreshing Designs</h2>
            <p style={{ fontSize: "small" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              officiis veritatis autem nihil vero, quod error.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-cards">
        {blogImages.map((item) => (
          <BlogCard url={item} />
        ))}
      </div>
    </section>
  );
};

const BlogCard = ({ url }) => {
  return (
    <div className="blog-card">
      <img src={url} />
      <div className="blog-content-card">
        <span className="blog-badge bg-purple">INSPIRATION</span>
        <h5>Refreshing Designs</h5>
        <p style={{ fontSize: "small" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          officiis veritatis autem.
        </p>
      </div>
    </div>
  );
};
