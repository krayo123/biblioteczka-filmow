
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  useEffect(() => {
    setMovies(["Shrek", "Król Lew", "Toy Story"]);
  }, []);

  const addMovie = () => {
    if (newMovie.trim() === "") return;

    setMovies((previousMovies) => [
      ...previousMovies,
      newMovie.trim()
    ]);

    setNewMovie("");
  };

  return (
    <div>
      <h1>Moja biblioteczka filmów</h1>

      <input
        type="text"
        placeholder="Wpisz tytuł filmu..."
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />

      <button onClick={addMovie}>
        Dodaj film
      </button>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
