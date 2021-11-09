import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'
import ProfileGithubs from './ProfileGithubs'
import Loader from '../common/Loader'
import { getProfileByProfileUsername } from '../../action/profileAction'

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.profileusername) {
      this.props.getProfileByProfileUsername(this.props.match.params.profileusername)
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/404')
    }
  }
  render() {
    const { profile, loading } = this.props.profile
    let profileContent = ''
    if (profile === null || loading) {
      profileContent = <Loader />
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/welcome" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
          {profile.githubusername ? <ProfileGithubs username={profile.githubusername} /> : null}
        </div>
      )
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  getProfileByProfileUsername: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfileByProfileUsername })(Profile)
