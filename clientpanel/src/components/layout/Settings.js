import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit
} from '../../action/settingsAction';

class Settings extends Component {
  disableBananceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };
  disableBananceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };
  allowRegistration = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };
  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow circle-left" />
              Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistration}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Add</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBananceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Edit</label>{' '}
                <input
                  type="checkbox"
                  name="disableBananceOnAEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBananceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
