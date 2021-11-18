import React from 'react';
export function CompanyCard(props) {
  // const company = props.company;
  console.log(props.company)
  return (
    <div className={props.colNum}>
        <div className='card bwm-card'>
          <div className='card-block'>
            <h6 className={`card-subtitle ${props.company.name}`}>Company name: {props.company.name}</h6>
            <h6 className={`card-title ${props.company.description}`}>Company describe: {props.company.description}</h6>
            <h6 className={`card-title ${props.company.staff}`}>Company staff: {props.company.staff.length}</h6>
            <h6 className={`card-title ${props.company.customer}`}>Company customer: {props.company.customer.length}</h6>
          </div>
        </div>
    </div>
  )
}
