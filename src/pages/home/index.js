import React, { useEffect, useState } from "react";
import { Container, Movie, Btn } from "./style";
import { Link } from "react-router-dom";
import "./app.css";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [popularMovies, setPopularMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  const [navbarBlack, setNavbarBlack] = useState(false);

  const handleSurpriseClick = () => {
    const randomMovieId = Math.floor(Math.random() * 10000); 
    const randomMovieLink = `/${randomMovieId}`;
    window.location.href = randomMovieLink;
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBlack(true); 
    } else {
      setNavbarBlack(false); 
    }
  };

  useEffect(() => {
    // populares
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });

    // terror
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=27`)
      .then((response) => response.json())
      .then((data) => {
        setHorrorMovies(data.results);
      });

    // ação
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=80`)
      .then((response) => response.json())
      .then((data) => {
        setActionMovies(data.results);
      });

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };

  }, [KEY]);

  const chunkArray = (arr, chunkSize) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  };

  const actionMovieGroups = chunkArray(actionMovies, 6);
  const popularMovieGroups = chunkArray(popularMovies, 6);
  const horrorMovieGroups = chunkArray(horrorMovies, 6);

  return (
    <div> 
     <nav className={`navbar navbar-expand-lg navbar-dark nav-style${navbarBlack ? " navbar-black" : ""}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img className="logo" src="./logo.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <Link to="/series" className="txt-deco"><a class="nav-link" aria-current="page" href="#">Séries</a></Link> 
            </li>
            <li class="nav-item">
              <button class="btn btn-link nav-link" onClick={handleSurpriseClick}>
                Surpreenda-me
              </button>
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
    <div id="carouselExampleCaptions" class="carousel slide carrousel-style fade-out-carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
            <Link to={`/1008042`}>
              <img src="./banner\talktome.png" class="d-block w-100 carrousel-style" alt="banner"/>
              </Link>
              <div class="carousel-caption mb-5">
              </div>
            </div>
            <div class="carousel-item">
            <Link to={`/976573`}>
              <img src="./banner/elementos.png" class="d-block w-100 carrousel-style" />
              </Link>
            </div>
            <div class="carousel-item">
            <Link to={`/545611`}>
              <img src="./banner/tudoemtodolugar.png" class="d-block w-100 carrousel-style" />
              </Link>
            </div>
            <div class="carousel-item">
            <Link to={`/569094`}>
              <img src="./banner/homemaranha.png" class="d-block w-100 carrousel-style" />
              </Link>
            </div>
          </div>
          <div class="fade-out-effect"></div>
        </div>
    <Container>
      <Link to="/genero/27" className="deco">Terror +</Link>
      <div id="horrorCarousel" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {horrorMovieGroups.map((movieGroup, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <div className="row">
                {movieGroup.map((movie) => (
                  <div key={movie.id} className="col-2">
                    <div className="d-flex justify-content-center">
                      <Link to={`/${movie.id}`}>
                        <Movie>
                          <img
                            src={`${imagePath}${movie.poster_path}`}
                          />
                        </Movie>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev custom-carousel-button" type="button" data-bs-target="#horrorCarousel" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-carousel-button" type="button" data-bs-target="#horrorCarousel" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="em-alta">
<p className="mt-5 deco">Top 20 da semana:</p> 
  <div id="popularCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      {popularMovieGroups.map((movieGroup, index) => (
        <div
          key={index}
          className={`carousel-item${index === 0 ? " active" : ""}`}
        >
          <div className="row">
            {movieGroup.map((movie, movieIndex) => {
              const cardNumber = index * 6 + movieIndex + 1; 
              return (
                <div key={movie.id} className="col-2">
                  <div className="d-flex justify-content-center">
                    <Link to={`/${movie.id}`} className="emalta">
                      <Movie>
                        <a className="emalta">#{cardNumber}</a>
                        <img src={`${imagePath}${movie.poster_path}`} />
                      </Movie>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  <button
    className="carousel-control-prev custom-carousel-button"
    type="button"
    data-bs-target="#popularCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
  </button>
  <button
    className="carousel-control-next custom-carousel-button"
    type="button"
    data-bs-target="#popularCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
</div>

      <Link to="/genero/27" className="deco">Ação +</Link>
      <div id="actionCarousel" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {actionMovieGroups.map((movieGroup, index) => (
            <div key={index} className={`carousel-item${index === 0 ? " active" : ""}`}>
              <div className="row">
                {movieGroup.map((movie) => (
                  <div key={movie.id} className="col-2">
                    <div className="d-flex justify-content-center">
                      <Link to={`/${movie.id}`}>
                        <Movie>
                          <img
                            src={`${imagePath}${movie.poster_path}`}
                          />
                        </Movie>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev custom-carousel-button" type="button" data-bs-target="#actionCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next custom-carousel-button" type="button" data-bs-target="#actionCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div> 
    </Container>
        <footer class="d-flex flex-wrap justify-content-between align-items-center bg-black py-5 px-5 border-top">
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
  
}



export default Home;
