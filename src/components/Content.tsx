import { MovieCard } from "./MovieCard";
import { List } from "react-virtualized";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    title: string;
    poster: string;
    ratings: string;
    runtime: string;
  }>;
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => {
            return (
              <MovieCard key={movie.imdbID} {...movie}/>
            );
          })}
        </div>
      </main>
    </div>
  )
}