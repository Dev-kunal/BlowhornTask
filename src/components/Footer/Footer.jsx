export const Footer = () => {
  return (
    <div className="footer">
      <div className="navigation">
        <nav>
          <ul className="routes">
            <li className="inline">Home</li>
            <li className="inline">Feature</li>
            <li className="inline">Blog</li>
            <li className="inline">Contact</li>
            <li className="inline">Search</li>
          </ul>
        </nav>
      </div>
      <ul style={{ paddingLeft: "0" }}>
        <li className="inline">
          {" "}
          <i class="fab fa-twitter mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i class="fab fa-facebook mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i class="fab fa-instagram mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i class="fab fa-dribbble mg-2"></i>
        </li>
        <li className="inline">
          {" "}
          <i class="fab fa-github mg-2"></i>
        </li>
      </ul>
      &copy; 2021 Designed By Kunal
    </div>
  );
};
