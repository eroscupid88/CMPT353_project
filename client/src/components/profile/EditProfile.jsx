import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../action/profileAction'

class CreateProfile extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getCurrentProfile()
  }
  render() {
    return <h1>edit-profile</h1>
  }
}
CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
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
