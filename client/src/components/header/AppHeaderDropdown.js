import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'
import { logoutUser } from '../../action/authAction'

/**
 *
 * Header working here
 */
class AppHeaderDropdown extends Component {
  constructor() {
    super()
  }
  onLogoutClick(event) {
    event.preventDefault()
    this.props.logoutUser()
  }

  render() {
    const { user } = this.props.auth
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={user.avatar} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
          <CDropdownItem href="/profile/Kyle">
            <CIcon icon={cilUser} className="me-2" />
            My Profile
          </CDropdownItem>
          <CDropdownItem href="/welcome">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownDivider />

          <CDropdownItem href="#" onClick={this.onLogoutClick.bind(this)}>
            <CIcon icon={cilLockLocked} className="me-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

AppHeaderDropdown.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(AppHeaderDropdown)
