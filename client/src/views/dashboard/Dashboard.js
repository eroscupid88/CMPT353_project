import React, { lazy, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    const { user } = this.props.auth
    return (
      <>
        <h1>{user.avatar}</h1>
      </>
    )
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(Dashboard)
