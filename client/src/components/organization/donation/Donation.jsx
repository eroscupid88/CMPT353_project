import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies } from '../../../action/companyAction'
import isEmpty from '../../../validation/isEmpty'
import { CFormInput, CInputGroup, CInputGroupText, CForm, CButton } from '@coreui/react'

export const Donation = () => {
  const [total, setTotal] = React.useState(0);
  const [displayState, setDisplayState] = React.useState(false);

  useEffect(() => {
    dispatch(getCompanies())
  }, [])
  const dispatch = useDispatch()
  const currentCompany = useSelector((state) => state.company)
  let companyDonation = null
  if (!isEmpty(currentCompany.companies)) {
    console.log(currentCompany.companies[0])
    companyDonation =
      (
        <div>
            {currentCompany.companies[0].donation.map(
          item => {
              return (<h1>{item}</h1>)
              }
            )
            }
        </div>
      )

  }
  console.log({displayState})
  const onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  let showDonation
  if({displayState}=== true){
    showDonation = (
      <div>
        <CInputGroup className="mb-3">

          <CInputGroupText id="basic-addon1">
            <p>Total Amount</p>
          </CInputGroupText>
          <CFormInput
            placeholder="Donation Amount"
            value={total}
          />
          </CInputGroup>
      </div>
    )
  }
  return (
    <>
      <button
        className="btn btn-light m-5"
        type="button"
        onClick={() => {
          setDisplayState(!{displayState})
          console.log({displayState})
        }}>Donate Here!
      </button>
      {displayState}
      {showDonation}
    </>

  )

}
