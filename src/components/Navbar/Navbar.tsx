import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          <Link to="/" className="text-white text-decoration-none">Calories</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;