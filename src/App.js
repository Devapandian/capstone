import "./App.css";
import Movies from "../src/components/Movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/header";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/Account";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import MovieDetail from "./components/MovieDetail/MovieDetail";   


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Movies />
              </Layout>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route
            path="/Products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/pricing"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />
          <Route
            path="/Blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/Detail/:id"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
                    <Route
            path="/Account"
            element={
              <Layout>
                <Account />
              </Layout>
            }
          />
                    <Route
            path="/ShoppingCart"
            element={
              <Layout>
                <ShoppingCart />
              </Layout>
            }
          />
                    <Route
            path="/MovieDetail/:id"
            element={
              <Layout>
                <MovieDetail />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
