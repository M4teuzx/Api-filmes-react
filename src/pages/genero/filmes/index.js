import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./app.css";

const Terror = () => {
  const [terrorMovies, setTerrorMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  const totalPages = 10;
  const { genreId } = useParams();

  useEffect(() => {
    const fetchTerrorMovies = async () => {
      try {
        const allResults = [];

        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-br&with_genres=${genreId}&page=${page}`
          );

          const data = await response.json();
          allResults.push(...data.results);
        }

        setTerrorMovies(allResults);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTerrorMovies();
  }, [genreId, KEY, totalPages]);

  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top bg-black`}>
      <div class="container-fluid">
      <Link to="/"> <a class="navbar-brand" href="#"><img className="logo" src="../../logo.png"/></a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          <Link to="/" className="txt-deco">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Home</a>
            </li>
            </Link>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gêneros
              </a>
              <ul class="dropdown-menu">
                <Link to="/genero/28"><li><a class="dropdown-item" href="#">Ação</a></li></Link>
                <Link to="/genero/12"><li><a class="dropdown-item" href="#">Aventura</a></li></Link>
                <Link to="/genero/16"><li><a class="dropdown-item" href="#">Animação</a></li></Link>
                <Link to="/genero/35"><li><a class="dropdown-item" href="#">Comédia</a></li></Link>
                <Link to="/genero/80"><li><a class="dropdown-item" href="#">Crime</a></li></Link>
                <Link to="/genero/99"><li><a class="dropdown-item" href="#">Documentário</a></li></Link>
                <Link to="/genero/18"><li><a class="dropdown-item" href="#">Drama</a></li></Link>
                <Link to="/genero/10751"><li><a class="dropdown-item" href="#">Família</a></li></Link>
                <Link to="/genero/14"><li><a class="dropdown-item" href="#">Fantasia</a></li></Link>
                <Link to="/genero/36"><li><a class="dropdown-item" href="#">História</a></li></Link>
                <Link to="/genero/27"><li><a class="dropdown-item" href="#">Terror</a></li></Link>
                <Link to="/genero/10402"><li><a class="dropdown-item" href="#">Música</a></li></Link>
                <Link to="/genero/9648"><li><a class="dropdown-item" href="#">Mistério</a></li></Link>
                <Link to="/genero/10749"><li><a class="dropdown-item" href="#">Romance</a></li></Link>
                <Link to="/genero/878"><li><a class="dropdown-item" href="#">Ficção científica</a></li></Link>
                <Link to="/genero/10770"><li><a class="dropdown-item" href="#">Cinema TV</a></li></Link>
                <Link to="/genero/53"><li><a class="dropdown-item" href="#">Thriller</a></li></Link>
                <Link to="/genero/10752"><li><a class="dropdown-item" href="#">Guerra</a></li></Link>
                <Link to="/genero/37"><li><a class="dropdown-item" href="#">Faroeste</a></li></Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
    <div>
      <h1 className="mt-5 mx-3">Mais filmes desse gênero:</h1>
      <div className="row mt-5">
        {terrorMovies.map((movie) => (
          <div key={movie.id} className="col-md-2 mb-3 tudo">
            <Link to={`/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid poster"
              />
            </Link>
            <h2 className="filme">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
    <footer class="d-flex flex-wrap justify-content-between align-items-center bg-black py-5 px-5 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; 2022 Sinima+</p>
          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img className="logo" src="../../logo.png"/>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
          </ul>
        </footer>
    </div>
  );
};

export default Terror;
