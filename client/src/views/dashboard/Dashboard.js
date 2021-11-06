import React, { lazy, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      auth: 'sfasdfsad',
      a: 'hohoho',
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({ auth: this.props.auth })
    }
  }

  render() {
    return (
      <>
        <h1>{this.props.auth.user.email}</h1>
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
