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
} from '@coreui/icons'

export function CompanyCustomersCard(props) {
  return (
    <>
      <CTableDataCell className="text-center">
        <Link to="/dashboard">
          <CAvatar size="md" src={props.customer.user.avatar} />
        </Link>
      </CTableDataCell>
      <CTableDataCell>
        <div>
          {props.customer.user.firstname} {props.customer.user.lastname}
        </div>
        <div className="small text-medium-emphasis">Customer</div>
      </CTableDataCell>
      <CTableDataCell className="text-center">
        <CIcon size="xl" icon={cilGroup} title="customer" />
      </CTableDataCell>
      <CTableDataCell className="text-center">
        <div className="small text-medium-emphasis">Created at</div>
        {props.customer.date}
      </CTableDataCell>
    </>
  )
}
