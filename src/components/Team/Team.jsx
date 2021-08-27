import "./team.css";
export const Team = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="team-heading">
        <span style={{ fontSize: "small", color: "#2168ebe5" }}>OUR TEAM</span>
        <h2>
          An incredible team of <br />
          amazing individuals{" "}
        </h2>
      </div>
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <UserCard />
        ))}
      </div>
    </div>
  );
};

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="img-div">
        <img
          className="user-img"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
      Freddy Smith
      <span style={{ color: "#2168ebe5" }}>CEO and Cofounder</span>
      <div>
        <i class="fab fa-twitter mg-2"></i>
        <i class="fab fa-github mg-2"></i>
      </div>
    </div>
  );
};
