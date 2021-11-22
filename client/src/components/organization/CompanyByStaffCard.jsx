import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {removeStaff} from '../../action/companyAction'
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

export function CompanyByStaffCard(props){
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth)
  const currentCompany = useSelector(state => state.company)
  let isOwner = ((currentUser.user.userId)=== (currentCompany.companyByStaff.owner))
    return(
      <>
        <CTableDataCell className="text-center">
            <CAvatar size="md" src={props.staff.user.avatar} />
        </CTableDataCell>

        <CTableDataCell>
          <div>{props.staff.user.firstname} {props.staff.user.lastname}</div>
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
        {isOwner ? (
          <CTableDataCell>
            <span id="deleteStaff" onClick={() => dispatch(removeStaff(props.staff.user._id))}>
              <CIcon size="xl" icon={cilUserX} title="Remove Staff"/>
              </span>
          </CTableDataCell>):''
        }
      </>
      )
}

