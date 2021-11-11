import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../action/profileAction'
import Loader from '../../components/common/Loader'
import ProfileAction from './ProfileAction'
import {CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cibInstagram, cibLinkedin, cibTwitter, cibYoutube} from "@coreui/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      errors: {}
    }
  }
  componentDidMount() {
    this.props.getCurrentProfile()
  }
  onDeleteClick = (event) => {
    this.props.deleteAccount()
    this.props.history.push('/')
  }
  on

  render() {
    const {errors} =this.state
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    let companyInputs;
    if (companyInputs) {
      companyInputs = (
        <div>
          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">
              <CIcon icon={cibTwitter} />
            </CInputGroupText>
            <CFormInput
              placeholder="Company name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              errors={errors.name}
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">
              <FontAwesomeIcon icon={faAddressBook} />
            </CInputGroupText>
            <CFormInput
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              errors={errors.description}
            />
          </CInputGroup>
        </div>
      )
    }

    let dashboardContent

    if (profile === null || loading) {
      dashboardContent = <Loader />
    } else {
      // check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome to{' '}
              <Link to={`profile/${profile.profileusername}`}>{profile.profileusername}</Link>
            </p>
            <ProfileAction />
            <div style={{ marginBottom: '60px' }} />
            <button onClick={this.onCreateCompany.bind(this)} className="btn btn-danger">
              Create a company
            </button>
            <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
              Delete My Profile
            </button>
          </div>
        )
      } else {
        // user is logged in but has no profile
        dashboardContent = (
          <div>
            <p>you have not yet setup a profile, please add some info</p>
            <Link to="/createprofile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        )
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Welcome</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Welcome.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Welcome)
