import React, { Component } from 'react'
import {
  cibFacebook,
  cibGithub,
  cibLinkedin,
  cibYoutube,
  cibInstagram,
  cibTwitter,
} from '@coreui/icons'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import isEmpty from '../../validation/isEmpty'
import connect from 'react-redux/lib/connect/connect'
import Loading from '../common/Loader'
import { Field } from 'redux-form'
// import {Field,Form }from 'react-final-form'
import FileUploads from '../common/form/FileUploads'
import {uploadImage} from '../../action/profileAction'

class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile:{}
    }
  }
  componentDidMount() {
    if (!isEmpty(this.props.profile)){
      this.setState({profile: this.props.profile})
      console.log(this.state)
    }
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (!isEmpty(nextProps.profile)) {
  //     this.setState({profile: nextProps.profile})
  //   }
  // }

   sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   onSubmit = async (values) => {
    await this.sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  render() {
    if (isEmpty(this.state.profile)){
      return (< Loading />)
    }
    else {
      const { profile } = this.state
      console.log(profile)
      return (
        <div>
          <div className="container emp-profile">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-img">
                    <img src={profile.user.avatar} alt="" />
                    <div className="file btn btn-lg btn-primary">
                      image
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h1>{profile.firstname} {profile.lastname}</h1>
                  </div>
                </div>
                <div className="col-md-2">
                  <Link to="/welcome" className="btn btn-light mb-3 float-left">
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>GITHUB</p>
                    {profile.githubusername ? (
                      <a href={profile.githubusername} target="_blank" rel="noopener noreferrer">
                        <CIcon icon={cibGithub} className="icon-xxl" />
                      </a>
                    ) : (
                      <p>N/A</p>
                    )}
                    <br />
                    <p>SOCIALS</p>
                    <span>
                    {isEmpty(profile.social && profile.social.twitter) ? null : (
                      <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">
                        <CIcon icon={cibTwitter} className="icon-xxl" />
                      </a>
                    )}

                      {isEmpty(profile.social && profile.social.facebook) ? null : (
                        <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                          <CIcon icon={cibFacebook} className="icon-xxl" />
                        </a>
                      )}

                      {isEmpty(profile.social && profile.social.linkedin) ? null : (
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <CIcon icon={cibLinkedin} className="icon-xxl" />
                        </a>
                      )}

                      {isEmpty(profile.social && profile.social.instagram) ? null : (
                        <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
                          <CIcon icon={cibInstagram} className="icon-xxl" />
                        </a>
                      )}
                  </span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.profileusername}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.firstname + ' ' + profile.lastname}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Location</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.location}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Created at</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      )
    }
  }
}

export default ProfileHeader
