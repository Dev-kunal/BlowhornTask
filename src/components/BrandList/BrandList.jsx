import "./partners.css";
export const BrandList = () => {
  const brandImages = [
    "https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-0.png",
    "https://logodownload.org/wp-content/uploads/2014/09/google-logo-0.png",
    "https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png",
    "https://logodownload.org/wp-content/uploads/2019/08/slack-logo-0.png",
    "https://logodownload.org/wp-content/uploads/2021/06/shopify-logo-0.png",
  ];
  return (
    <div style={{ marginTop: "4rem", textAlign: "center" }}>
      <p className="cust-heading">TRUSTED BY TOP LEADING COMPANIES</p>
      <div className="brands">
        {brandImages.map((item) => (
          <img className="brand-img" src={item}></img>
        ))}
      </div>
    </div>
  );
};
