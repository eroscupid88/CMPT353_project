import React, { Component } from 'react'
import { CompanyCustomersCard } from './CompanyCustomersCard'
import { CTableRow } from '@coreui/react'

export default class CompanyCustomersList extends Component {
  renderCompaniesCustomerlist() {
    return this.props.profiles.map((profile, index) => {
      console.log(profile)
      return (
        <CTableRow v-for="item in tableItems">
          <CompanyCustomersCard key={index} colNum="col-md-3 col-xs-6" customer={profile} />
        </CTableRow>
      )
    })
  }
  render() {
    return this.renderCompaniesCustomerlist()
  }
}
