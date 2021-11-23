import React, { lazy, Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getCurrentCompanyByStaff } from '../../action/companyAction'
import Loader from '../../components/common/Loader'
import { CompanyByStaffList } from './CompanyByStaffList'
import isEmpty from '../../validation/isEmpty'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cilUserX,
  cilPeople,
  cilUser,
  cilGroup,
} from '@coreui/icons'
import { connect } from 'react-redux'
import CIcon from '@coreui/icons-react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import {
  CAvatar,
  CButton,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class CompanyStaffsInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
    }
  }
  componentDidMount() {
    this.props.getCurrentCompanyByStaff()
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  render() {
    let companyByStaffDetails
    const { companyByStaff, loading } = this.props.company
    const { errors } = this.state
    if (!isEmpty(errors)) {
      companyByStaffDetails = ''
    } else if (isEmpty(companyByStaff) || loading) {
      companyByStaffDetails = <Loader />
    } else {
      if (Object.keys(companyByStaff).length > 0) {
        console.log(companyByStaff.staff)
        companyByStaffDetails = <CompanyByStaffList staffList={companyByStaff.staff} />
      }
    }
    return (
      <>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell className="text-center">
                <CIcon icon={cilPeople} />
              </CTableHeaderCell>
              <CTableHeaderCell>People</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Role</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Activity</CTableHeaderCell>
              <CTableHeaderCell>{isOwner ? 'Options' : ''}</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>{companyByStaffDetails}</CTableBody>
        </CTable>
      </>
    )
  }
}
const isOwner = false

CompanyStaffsInfo.propTypes = {
  company: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getCurrentCompanyByStaff: PropTypes.func.isRequired,
}
const mapPropsToState = (state) => ({
  company: state.company,
  errors: state.errors,
})
export default connect(mapPropsToState, { getCurrentCompanyByStaff })(CompanyStaffsInfo)
