import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
import CIcon from '@coreui/icons-react'
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

export function CompanyCustomersCard(props) {
  return (
    <>
      <CTableDataCell className="text-center">
        <Link to="/dashboard">
          <CAvatar className="profile-img" size="lg" src={props.customer.user.avatar} />
        </Link>
      </CTableDataCell>
      <CTableDataCell>
        <div>
          {props.customer.user.firstname} {props.customer.user.lastname}
        </div>
      </CTableDataCell>
      <CTableDataCell className="text-center">
        <div className="small text-medium-emphasis">Created at</div>
        {props.customer.date}
      </CTableDataCell>
      <CTableDataCell>
        <button id="deleteCustomer" className="delete-user-btn" type="button" onClick={() => {}}>
          <CIcon size="xl" icon={cilXCircle} title="Remove Staff" />
        </button>
      </CTableDataCell>
    </>
  )
}
