import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'
import ProfileGithubs from './ProfileGithubs'
import Loader from '../common/Loader'
import { getProfileByProfileUsername } from '../../action/profileAction'

class Profile extends Component {
  render() {
    const { profile, loading } = this.props.profile
    console.log(this.props.profile)
    const profileContent = ''
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
