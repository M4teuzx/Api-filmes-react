import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Genero from "./pages/genero/filmes";
import Series from "./pages/series";
import Serie from "./pages/serie";
import Generoserie from "./pages/genero/series";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/genero/:genreId" exact element={<Genero />} />
                <Route path="/series/" exact element={<Series />} />
                <Route path="/serie/:id" exact element={<Serie />} />
                <Route path="/series/genero/:genreId" exact element={<Generoserie />} />
            </Routes>
        </div>
    );
};

export default App;
