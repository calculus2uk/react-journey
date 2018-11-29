import React, { Component, Fragment } from 'react';
import { getMovies } from '../Helpers/fakeMovieService';
import Like from './Like';
import Pagination from './Pagination';
import { paginate } from '../Helpers/paginate';
import ListGroup from './ListGroup';
import { getGenres } from '../Helpers/fakeGenreService';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ name: 'All Genres' }, ...getGenres()];

    this.setState({ movies, genres });
  }

  handleDelete = movie => {
    let { movies } = this.state;

    movies = movies.filter(m => m._id !== movie._id);

    //const movies = this.state.movies.filter(m => m._id !== movie._id);

    this.setState({ movies });
  };

  handleLiked = movie => {
    const { movies } = { ...this.state };
    movie.liked = !movie.liked;
    const index = movies.indexOf(movie);
    movies[index] = movie;

    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre
    } = this.state;

    const total = allMovies.length;

    const filterdMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filterdMovies, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-sm-9">
            <h1>Movie Component</h1>
            {total === 0 ? (
              <p>Sorry no movies to display </p>
            ) : (
              <Fragment>
                <p>Current Movie count is {filterdMovies.length} </p>
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Rate</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((m, index) => (
                      <tr key={m._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>{m.numberInStock}</td>
                        <td>{m.dailyRentalRate}</td>
                        <td onClick={() => this.handleLiked(m)}>
                          <Like like={m.liked} />
                        </td>
                        <td className="btn">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => this.handleDelete(m)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  total={filterdMovies.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
