import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../../action/authAction'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibGmail, cilLockLocked, cilUser } from '@coreui/icons'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit method="post">
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cibGmail} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="email"
                          autoComplete="email"
                          type="email"
                          // value={this.state.email}
                          // onChange={this.onChange}
                          // errors={errors.email}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          // value={this.state.password}
                          // onChange={this.onChange}
                          // errors={errors.password}
                        />
                      </CInputGroup>

                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" type="submit">
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>It is Quick and Easy to Sign Up</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Login
