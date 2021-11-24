import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from '../../../action/companyAction'
import isEmpty from '../../../validation/isEmpty'
import { CFormInput, CInputGroup, CInputGroupText, CForm, CButton, CRow, CCol } from '@coreui/react'

export const Donation = () => {
  const [total, setTotal] = React.useState(0)
  const [displayState, setDisplayState] = React.useState(false)

  useEffect(() => {
    dispatch(getCompanies())
  }, [])
  const dispatch = useDispatch()
  const currentCompany = useSelector((state) => state.company)
  let companyDonation = null
  if (!isEmpty(currentCompany.companies)) {
    console.log(currentCompany.companies[0])
    companyDonation = (
      <div>
        {currentCompany.companies[0].donation.map((item) => {
          return <h1>{item}</h1>
        })}
      </div>
    )
  }
  const onChange = (event) => {
    setTotal(event.currentTarget.value)
  }
  let showDonation = (
    <div className="col pt-2">
      <CInputGroup className="donation-field">
        <CInputGroupText id="basic-addon1">Amount</CInputGroupText>
        <CFormInput placeholder="Donation Amount" value={total} onChange={() => {}} />
        <CButton color="success" type="submit">
          Donate
        </CButton>
      </CInputGroup>
    </div>
  )
  return (
    // <CForm onSubmit={() => {}}>
    //   <CRow className="justify-content-center">
    //     <CCol className="donate-btn">
    <div className="row">
      <div className="col-4">
        <button
          className="browse-jobs-btn mt-3"
          type="button"
          onClick={() => {
            setDisplayState(!displayState)
            console.log({ displayState })
          }}
        >
          Donate Here!
        </button>
      </div>
      {displayState ? showDonation : ''}
    </div>

    // {/*    </CCol>*/}
    // {/*    <CCol></CCol>*/}
    // {/*  </CRow>*/}
    // {/*</CForm>*/}
  )
}
