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
          <CDropdownItem href="#">
            <CIcon icon={cilBell} className="me-2" />
            bell
            <CBadge color="info" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            Messages
            <CBadge color="success" className="ms-2">
              100
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilTask} className="me-2" />
            Tasks
            <CBadge color="danger" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            Comments
            <CBadge color="warning" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Payments
            <CBadge color="secondary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilFile} className="me-2" />
            Projects
            <CBadge color="primary" className="ms-2">
              42
            </CBadge>
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
