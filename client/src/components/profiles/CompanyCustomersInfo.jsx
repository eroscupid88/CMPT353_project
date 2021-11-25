import React, { Component } from 'react'
import { getProfiles } from '../../action/profileAction'
import PropTypes from 'prop-types'
import Loader from '../common/Loader'
import CompanyCustomersList from './CompanyCustomersList'
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
  cilXCircle,
} from '@coreui/icons'
import { connect } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../index'
import DefaultLayout from '../layout/DefaultLayout'
import { removeStaff } from '../../action/companyAction'

class CompanyCustomersInfo extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // call getCompanies to get information of the companies
    this.props.getProfiles()
  }
  render() {
    const { profiles, loading } = this.props.profile
    let customerDetails
    if (profiles == null || loading) {
      customerDetails = <Loader />
    } else {
      customerDetails = <CompanyCustomersList profiles={profiles} />
    }
    return (
      <DefaultLayout
        content={
          <>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>People</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Creation Date</CTableHeaderCell>
                  <CTableHeaderCell />
                </CTableRow>
              </CTableHead>
              <CTableBody>{customerDetails}</CTableBody>
            </CTable>
          </>
        }
      />
    )
  }
}

const isOwner = false
CompanyCustomersInfo.propTypes = {
  profile: PropTypes.object.isRequired,
}

const mapPropToState = (state) => ({
  profile: state.profile,
})

export default connect(mapPropToState, { getProfiles })(CompanyCustomersInfo)
