import { useState } from "react";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
    release_date?: string;
    vote_average?: number;
}


export default function MovieSearchComponent() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);



    const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching...");
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }
        catch (err) {
            console.error(err);
        }
    }


    const movieCards =                 
    movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))


    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="write your query here." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="button">Search</button>
        </form>
        <div className="card-list">
            {movieCards}
        </div>
        </>
    )
}