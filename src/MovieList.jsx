
function MovieList({ movies }) {
  return (
    <div>
      <h2>Lista filmów:</h2>

      <ul>
        {movies.map((movie, index) => (
          <li key={`${movie}-${index}`}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
