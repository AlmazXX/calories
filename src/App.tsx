import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MealFormWrapper from "./containers/Forms/MealFormWrapper";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meal/add' element={<MealFormWrapper/>}/>
        <Route path='/meal/:id/edit' element={<MealFormWrapper/>}/>
      </Routes>
    </Layout>
  );
}

export default App;