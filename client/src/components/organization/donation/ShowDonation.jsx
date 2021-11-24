import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from '../../../action/companyAction'
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../../index'
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
export const ShowDonation = ()=>{
  const dispatch = useDispatch()
  const currentCompany = useSelector((state) => state.company)
  // useEffect(() => {
  //   dispatch(getCompanies())
  // }, [])
console.log(currentCompany)
  return(
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <p>Show Donation</p>
          {!currentCompany.company ? null : currentCompany.company.donation.map(
            (someitem,index)=> {
              console.log(someitem)
            return (
              <>
              <CTableRow>
                <CTableDataCell>
                    <span>{someitem.firstname} {someitem.lastname} has donated: $</span>
                    <span>   </span>
                </CTableDataCell>
                <CTableDataCell>
                  <div>
                    <span> </span>{ someitem.amount}
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div>
                    {' '} at {someitem.date}
                  </div>
                </CTableDataCell>
              </CTableRow>
              </>)
          })}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}
