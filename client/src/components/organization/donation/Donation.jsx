import React,{ useState, useEffect } from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import {getCompanies} from '../../../action/companyAction'
import isEmpty from '../../../validation/isEmpty'

export const Donation = () => {
  const [companies, setCompanies] = React.useState(null);
  useEffect(() => {
    dispatch(getCompanies())
  }, [])
  const dispatch = useDispatch()
  const currentCompany = useSelector(state => state.company)
  let companyDonation = null
  if(!isEmpty(currentCompany.companies)) {
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
  return (
    <>  <h1>{companyDonation}</h1></>
  )
}

