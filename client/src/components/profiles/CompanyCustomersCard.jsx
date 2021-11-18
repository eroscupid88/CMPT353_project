import React from 'react';
import { Link } from 'react-router-dom';
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

export function CompanyCustomersCard(props){
  const dispatch = useDispatch()
  console.log(props.customer)
  return(
    <>
      <CTableDataCell className="text-center">
        <Link to='/dashboard'>
          <CAvatar size="md" src={props.customer.user.avatar} />
        </Link>
      </CTableDataCell>
      <CTableDataCell>
        <div>{props.customer.user.firstname} {props.customer.user.lastname}</div>
        <div className="small text-medium-emphasis">
          {/*<span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}*/}
          {/*{item.user.registered}*/}
          register
        </div>
      </CTableDataCell>
      <CTableDataCell className="text-center">
        <CIcon size="xl"
               icon= {cilGroup}
               title= 'owner'
        />
      </CTableDataCell>
      <CTableDataCell className="text-center">
        <div className="small text-medium-emphasis">Last login</div>
        {/*<strong>{item.activity}</strong>*/}
      </CTableDataCell>
      {/*{isOwner ? (*/}
      <CTableDataCell>
            <span id="deleteStaff" onClick={() => {}}>
              <CIcon size="xl" icon={cilUserX} title="Remove Staff" />
              </span>
      </CTableDataCell>
    </>
  )
}

