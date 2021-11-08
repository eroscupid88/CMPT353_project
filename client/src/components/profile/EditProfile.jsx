import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class EditProfile extends Component {
  constructor() {
    super()
  }
  render() {
    return <h1>edit-profile</h1>
  }
}
EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(EditProfile)
