import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../../action/authAction'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibAboutMe, cibGmail, cilLockLocked, cilUser} from '@coreui/icons'
import PropTypes from 'prop-types'
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    // if authenticate, /register cannot be call and push to dashboard instead
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  onSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(newUser, this.props.history)
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    const { errors } = this.state
    return (
      <div className="login-bg min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm validated={true} onSubmit={this.onSubmit}>
                    <p className="text-high-emphasis">Enter New Account Information</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FontAwesomeIcon icon={faUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="firstname"
                        autoComplete="firstname"
                        name="firstname"
                        defaultValue=""
                        value={this.state.firstname}
                        onChange={this.onChange}
                        errors={errors.firstname}
                        required
                      />
                    </CInputGroup><CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FontAwesomeIcon icon={faUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="lastname"
                        autoComplete="lastname"
                        name="lastname"
                        defaultValue=""
                        value={this.state.lastname}
                        onChange={this.onChange}
                        errors={errors.lastname}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        defaultValue=""
                        value={this.state.email}
                        onChange={this.onChange}
                        errors={errors.email}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        defaultValue=""
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={this.onChange}
                        errors={errors.password}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password2"
                        value={this.state.password2}
                        defaultValue=""
                        placeholder="Re-enter Password"
                        autoComplete="new-password"
                        onChange={this.onChange}
                        errors={errors.password2}
                        required
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" type="submit">
                        Create Account
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
})
export default connect(mapStateToProps, { registerUser })(Register)
