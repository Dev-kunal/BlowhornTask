import "./styles.css";
import {
  Team,
  BrandList,
  Hero,
  Navbar,
  Blog,
  Features,
  Footer,
  Intro,
} from "./components/index.js";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrandList />
      <Intro />
      <Features />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}
