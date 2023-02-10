import {Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App bg-slate-900">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
