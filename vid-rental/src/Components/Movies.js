import React, { Component, Fragment } from 'react';
import { getMovies } from '../Helpers/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    let { movies } = this.state;

    movies = movies.filter(m => m._id !== movie._id);

    //const movies = this.state.movies.filter(m => m._id !== movie._id);

    this.setState({ movies });
  };
  render() {
    const { movies } = this.state;

    const total = movies.length;

    return (
      <div className="container">
        <h1>Movie Component</h1>
        {total === 0 ? (
          <p>Sorry no movies to display </p>
        ) : (
          <Fragment>
            <p>Current Movie count is {total} </p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
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
                    <td className="btn">
                      <button
                        type="button"
                        onClick={() => this.handleDelete(m)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Movies;
