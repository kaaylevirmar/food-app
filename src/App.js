import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Favorites from "./views/Favorites";
import AddRecipe from "./views/AddRecipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          exact
          path='/menu'
          element={<Menu />}
        />
        <Route
          exact
          path='/favorites'
          element={<Favorites />}
        />
        <Route
          exact
          path='/addrecipe'
          element={<AddRecipe />}
        />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
