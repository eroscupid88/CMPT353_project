import React,{Component} from "react";
import {connect} from "react-redux";
import {getCompanies} from '../../action/companyAction'
import PropTypes from "prop-types";
import CompanyList from "./CompanyList";
import Loader from "../common/Loader";

class Organizations extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // call getCompanies to get information of the companies
    this.props.getCompanies()
  }


  render(){

    const { companies, loading } = this.props.company
    let companiesDetails
    if (companies == null || loading){
      companiesDetails = <Loader />
    }else{
      if (Object.keys(companies).length > 0) {
        console.log(companies)
        companiesDetails = <CompanyList companies = {companies} />
      }
    }
    return( (
      <section id="companies">
        <h1 className="page-title">Hope a better World</h1>
        {companiesDetails}
      </section>
    ))
  }
}
Organizations.propTypes = {
  company: PropTypes.object.isRequired,
  getCompanies: PropTypes.func.isRequired
}

const mapPropToState = (state) => ({
  company: state.company
})

export default connect(mapPropToState
, {getCompanies})(Organizations)