import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState({});
  const [trailerKey, setTrailerKey] = useState("");
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      });
  }, [id, KEY]);

  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-dark`}>
      <div class="container-fluid">
      <Link to="/"> <a class="navbar-brand" href="#"><img className="logo" src="./logo.png"/></a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gêneros
              </a>
              <ul class="dropdown-menu bg-black">
                <Link to="/series/genero/28" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Ação</a></li></Link>
                <Link to="/genero/12" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Aventura</a></li></Link>
                <Link to="/genero/16" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Animação</a></li></Link>
                <Link to="/genero/35" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Comédia</a></li></Link>
                <Link to="/genero/80" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Crime</a></li></Link>
                <Link to="/genero/99" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Documentário</a></li></Link>
                <Link to="/genero/18" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Drama</a></li></Link>
                <Link to="/genero/10751" className="txt-deco"><li><a class="dropdown-item text-white"  href="#">Família</a></li></Link>
                <Link to="/genero/14" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Fantasia</a></li></Link>
                <Link to="/genero/36" className="txt-deco"><li><a class="dropdown-item text-white" href="#">História</a></li></Link>
                <Link to="/genero/27" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Terror</a></li></Link>
                <Link to="/genero/10402" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Música</a></li></Link>
                <Link to="/genero/9648" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Mistério</a></li></Link>
                <Link to="/genero/10749" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Romance</a></li></Link>
                <Link to="/genero/878" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Ficção científica</a></li></Link>
                <Link to="/genero/10770" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Cinema TV</a></li></Link>
                <Link to="/genero/53" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Thriller</a></li></Link>
                <Link to="/genero/10752" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Guerra</a></li></Link>
                <Link to="/genero/37" className="txt-deco"><li><a class="dropdown-item text-white" href="#">Faroeste</a></li></Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="movie-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid img-movie-poster"
              src={`${imagePath}${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="col-md-8">
            <h1 className="movie-title">{movie.title}</h1>
            <h3 className="movie-release-date">Data de lançamento: {movie.release_date}</h3>
            <div className="movie-description">
              <h4>Descrição:</h4>
              <p className="movie-desc">{movie.overview}</p>
            </div>
            <h4 className="movie-rating">Nota: {movie.vote_average} ⭐</h4>
            <h4 className="movie-vote-count">Quantidade de votos: {movie.vote_count}</h4>
            <h4 className="movie-popularity">Popularidade: {movie.popularity}</h4>
            <h4 className="movie-language">Idioma: {movie.original_language}</h4>
            <h4 className="movie-adult">Adulto: {movie.adult ? "Sim" : "Não"}</h4>
            <h4 className="movie-video">Video: {movie.video ? "Sim" : "Não"}</h4>
            <h4 className="movie-original-title">Título original: {movie.original_title}</h4>
            <div class="accordion bg-black" id="accordionPanelsStayOpenExample">
            <div class="accordion-item bg-black">
              <h2 class="accordion-header">
                <button class="accordion-button bg-black text-white border border-dark-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  + Informações
                </button>
              </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse border border-dark-subtle">
        <div class="accordion-body">
        <h4 className="movie-genres">Gêneros:</h4>
              <ul className="movie-genres-list">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id} className="movie-genre">
                      {genre.name}
                    </li>
                  ))}
              </ul>
              <h4 className="movie-budget">Orçamento: {movie.budget}</h4>
              <h4 className="movie-imdb-id">IMDB ID: {movie.imdb_id}</h4>
              <h4 className="movie-production-companies">Companhias de produção:</h4>
              <ul className="movie-production-companies-list">
                {movie.production_companies &&
                  movie.production_companies.map((production_companies) => (
                    <li key={production_companies.id} className="movie-production-company">
                      {production_companies.name}
                    </li>
                  ))}
              </ul>
              <h4 className="movie-production-countries">Países de produção:</h4>
              <ul className="movie-production-countries-list">
                {movie.production_countries &&
                  movie.production_countries.map((production_countries) => (
                    <li key={production_countries.id} className="movie-production-country">
                      {production_countries.name}
                    </li>
                  ))}
              </ul>
              <h4 className="movie-revenue">Receita: {movie.revenue}</h4>
              <h4 className="movie-runtime">Tempo de execução: {movie.runtime}</h4>
              <h4 className="movie-spoken-languages">Idiomas falados:</h4>
              <ul className="movie-spoken-languages-list">
                {movie.spoken_languages &&
                  movie.spoken_languages.map((spoken_languages) => (
                    <li key={spoken_languages.id} className="movie-spoken-language">
                      {spoken_languages.name}
                    </li>
                  ))}
              </ul>
        </div>
      </div>
  </div>
  <div class="accordion-item bg-black">
    <h2 class="accordion-header bg-black">
      <button class="accordion-button collapsed border border-dark-subtle bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Trailer
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse border border-dark-subtle">
      <div class="accordion-body">
      {trailerKey && (
              <div className="movie-trailer">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            )}
      {!trailerKey && (
              <div className="movie-trailer">
                <p>Trailer não encontrado</p>
                </div>
            )}
      </div>
    </div>
  </div>
</div>
            
            <Link to="/" className="btn btn-primary mt-3">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-5 px-5 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; 2022 Sinima+</p>
          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img className="logo" src="./logo.png"/>
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

export default Movie;
