import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../action/profileAction'

class CreateProfile extends Component {
  constructor() {
    super()
  }
  render() {
    return <h1>edit-profile</h1>
  }
}
CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile),
)
