import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentCompanyByStaff } from '../../../action/companyAction'
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
export const ShowDonation = () => {
  const [total, setTotal] = React.useState(0)
  const currentCompany = useSelector((state) => state.company)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentCompanyByStaff())
  }, [])
  let totalAmout = 0
  console.log(currentCompany)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <p>Show Donation</p>
          {!currentCompany.companyByStaff
            ? null
            : currentCompany.companyByStaff.donation.map((someitem, index) => {
                // {someitem.amount? setTotal(total+someitem.amount): setTotal(total)}
                totalAmout = totalAmout + someitem.amount
                return (
                  <>
                    <CTableRow key={index}>
                      <CTableDataCell>
                        <span>
                          {someitem.firstname} {someitem.lastname} has donated: $
                        </span>
                        <span> </span>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          <span> </span>
                          {someitem.amount}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div> at {someitem.date}</div>
                      </CTableDataCell>
                    </CTableRow>
                  </>
                )
              })}
        </div>
        <div>Total of ${totalAmout} has been donate to organization</div>
        <AppFooter />
      </div>
    </div>
  )
}
