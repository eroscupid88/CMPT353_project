import React,{Component} from "react";
import {getProfiles} from '../../action/profileAction'
import PropTypes from "prop-types";
import Loader from "../common/Loader";
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
} from '@coreui/icons'
import {connect} from 'react-redux'
import CIcon from '@coreui/icons-react'

class CompanyCustomersInfo extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // call getCompanies to get information of the companies
    this.props.getProfiles()
  }
  render(){
    const { profiles, loading } = this.props.profile
    let customerDetails
    if (profiles == null || loading){
      customerDetails = <Loader />
    }else{
      if (Object.keys(profiles).length > 0) {
        console.log(profiles)
        customerDetails = <CompanyCustomersList profiles = {profiles} />
      }
    }
    return(
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
          <CTableBody>
            {customerDetails}
          </CTableBody>
        </CTable>
      </>
    )
  }
}

const isOwner = false
CompanyCustomersInfo.propTypes = {
  profile: PropTypes.object.isRequired,

}

const mapPropToState = (state) => ({
  profile: state.profile
})

export default connect(mapPropToState,{getProfiles})(CompanyCustomersInfo)
