import { Link } from "@material-ui/core";
import "./HomePage.css";

export default function HomePage(props) {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div>
        <Link to="/Login">Sign in</Link>
        <Link to="/Signup">Sign up</Link>
      </div>
    </div>
  );
}
