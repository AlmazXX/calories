import { Link } from "react-router-dom";
import Meals from "../../components/Meal/Meals";

const Home = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-8">Total calories today: <strong></strong></div>
        <div className="col-4 text-end">
          <Link to="meal/add" className="btn btn-primary">Add new meal</Link>
        </div>
      </div>
      <div className="row mt-3"><Meals/></div>
    </>
  );
};

export default Home;