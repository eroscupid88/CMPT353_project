import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../action/profileAction'
import { getCurrentCompany,deleteCompany  } from '../../action/companyAction'
import Loader from '../../components/common/Loader'
import ProfileAction from './ProfileAction'
import {CFormInput, CInputGroup, CInputGroupText} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cibInstagram, cibLinkedin, cibTwitter, cibYoutube} from "@coreui/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import isEmpty from "../../validation/isEmpty";


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state={
      wantDelete: false,
      name: '',
      errors: {}
    }
  }
  componentDidMount() {
    this.props.getCurrentProfile()
    this.props.getCurrentCompany()
  }
  showDeleteMenu() {
    this.setState({
      wantDelete: true
    });
  }
  closeDeleteMenu() {
    this.setState({
      wantDelete: false
    })
  }
  onDeleteClick = (event) => {
    this.props.deleteAccount(this.props.history)
  }
  onDeleteCompany = (event) =>{
    this.props.deleteCompany(this.props.history)
  }


  render() {
    const { profile, loading } = this.props.profile
    const {company} = this.props.company
    const { wantDelete } = this.state;
    const deleteClass = wantDelete ? 'toBeDeleted' : '';
    let dashboardContent
    let deleteCompanyButton
    let deleteProfileButton


    if(!isEmpty(company)){
      deleteCompanyButton = (<button onClick={this.onDeleteCompany.bind(this)} className="btn btn-danger">
        Delete My Company
      </button>)
    }
    if(!isEmpty(profile)){
      deleteProfileButton = (<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
        Delete My Profile
      </button>)
    }

    if (profile === null || loading) {
      dashboardContent = <Loader />
    } else {
      // check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome to{' '}
              <Link to={`profile/${profile.profileusername}`}>{profile.firstname} {profile.lastname}</Link>
            </p>
            <ProfileAction mycompany={this.props.company} user={this.props.auth}/>
            <div style={{ marginBottom: '60px' }} />
            {deleteProfileButton}
            {deleteCompanyButton}
          </div>


        )
      } else {
        // user is logged in but has no profile
        dashboardContent = (
          <div>
            <p>you have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
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
              <h1 className="display-4">Welcome To Setting</h1>
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
  getCurrentCompany: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  company: state.company,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount,getCurrentCompany,deleteCompany })(withRouter(Welcome))
