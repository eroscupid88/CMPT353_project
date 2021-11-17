import React from 'react'
import { Link } from 'react-router-dom'
import isEmpty from '../../validation/isEmpty'
import { CButton, CCol, CLink, CRow } from '@coreui/react'
const ProfileAction = (props) => {
  let companyItem
  if (props.user.user.email === 'dillon@yahoo.com') {
    if (isEmpty(props.mycompany.company)) {
      companyItem = (
        <Link to="/create-company" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1" /> Create Company
        </Link>
      )
    } else {
      companyItem = (
        <Link to="/edit-company" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1" /> Edit Company
        </Link>
      )
    }
  }

  return (
    // <div className="btn-group mb-4" role="group">
    //   <Link to="/edit-profile" className="btn btn-light">
    //     <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
    //   </Link>
    //   {companyItem}
    // </div>
    <CRow>
      <CCol xs={6}>
        <Link to="/edit-profile">
          <CButton color="light" className="px-4 btn-outline-info">
            Edit Profile
          </CButton>
        </Link>
      </CCol>
    </CRow>
  )
}

export default ProfileAction
