import React,{ Component } from 'react'
import {CompanyCustomersCard} from './CompanyCustomersCard'
import {
  CTableRow,
} from '@coreui/react'

export default class CompanyCustomersList extends Component{
  renderCompaniesCustomerlist() {
    return this.props.profiles.map((profile, index) => {
      console.log(profile)
      return (
        <CompanyCustomersCard key= {index}
                            colNum='col-md-3 col-xs-6'
                            customer={profile}/>
      )
    });
  }
  render(){
    return(
      <CTableRow v-for="item in tableItems">
        {this.renderCompaniesCustomerlist()}
      </CTableRow>

      // </CTableRow>
    )
  }
}

