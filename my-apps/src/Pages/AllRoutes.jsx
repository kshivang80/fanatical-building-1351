import { Route, Routes } from "react-router-dom";


import About from "./About";
import Login from "./Login";







function AllRoutes() {
    return (
      <div>
        {/* second steps apply routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} /> */}
         
        </Routes>
      </div>
    );
  }
  export default AllRoutes;