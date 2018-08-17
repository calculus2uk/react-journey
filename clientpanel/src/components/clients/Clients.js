import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '456213587',
        firstName: 'Ike',
        lastName: 'Doe',
        email: 'ikeDoe@email.com',
        phone: '111-111-111-1',
        balance: '30'
      },
      {
        id: '4505023587',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janeDoe@email.com',
        phone: '222-111-111-1',
        balance: '100.4354'
      }
    ];

    if (clients) {
      return (
        <div className="row">
          <div className="col-md--">
            <h2>
              <i className="fas fa-users" />
              Clients
            </h2>
          </div>
          <div className="col-md-6" />

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
