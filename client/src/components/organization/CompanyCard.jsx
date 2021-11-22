import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import isEmpty from '../../validation/isEmpty'
import PropTypes from "prop-types"
import  { connect } from 'react-redux'
import {createStaffRequest} from '../../action/requestingAction'
class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: null,
      staffRequest: true,
      customerRequest: false,
      errors: {},
      company: props.company

    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({
        user: this.props.auth.user
      })
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.errors.request)) {
      this.setState({ errors: nextProps.errors })
      alert(nextProps.errors.request)
    }
  }

    onRequest = (event) =>{
    event.preventDefault()
    console.log("click click")
    const data = {
      staffRequest: this.state.staffRequest,
      customerRequest: this.state.customerRequest,
      company: this.state.company
    }
    this.props.createStaffRequest(data)
  }

  render(){

    let  isOwner = false

    if(!isEmpty(this.state.company)&& (!isEmpty(this.state.user))){
      isOwner = ((this.state.company.owner === this.state.user.userId))
    }
    return(
      <>
        <div className="body-organization">
          <div className="profile-card-hover">
            <div className="profile-card__content">
              <div className="about-company">
                  <a className="profile-card__avatar">
                    <img src="https://image.ibb.co/h8LN9K/ea.png" alt="Company Avatar"/>
                  </a>
                <div className="row-wrapper"><a className="profile-card__company-name">{this.state.company.name}</a>
                  <p className="profile-card__company-bio">{this.state.company.name} • Saskatoon Saskatchewan •</p>
                  {isOwner ? null :<button className="btn browse-jobs-btn" onClick={this.onRequest.bind(this)}>
                    Apply for Jobs
                  </button>}

                </div>
                <div className="user-actions">
                  <button className="btn btn-small follow-btn" type="button"><i className="icon plus-icon">
                    <svg>xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      x="0px" y="0px" viewBox="0 0 32 40" enable-background="new 0 0 32 32" xml:space="preserve"
                      <polygon
                        points="32,14.5 17.5,14.5 17.5,0 14.5,0 14.5,14.5 0,14.5 0,17.5 14.5,17.5 14.5,32 17.5,32 17.5,17.5 32,17.5 "/>
                    </svg>
                  </i><span>Follow</span></button>
                </div>
              </div>
              <div className="row-wrapper"><span>Total Customer {!isEmpty(this.props.profiles) ? (this.props.profiles.length): ''} • </span>
                <Link to={'/customer'}> See All</Link>
              </div>
              <a className="ellipsis-horizontal-icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"
                     fill="#9ba1ad" width="60px" height="60px">
                  <circle cx="31.14" cy="50" r="6.14"></circle>
                  <circle cx="50" cy="50" r="6.14"></circle>
                  <circle cx="68.86" cy="50" r="6.14"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

CompanyCard.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  createStaffRequest: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth
})
export default connect(mapStateToProps,{createStaffRequest})(CompanyCard)


// import React, {Component} from 'react'
// import  { connect } from 'react-redux'
// import  {getCurrentCompanyById} from '../../action/companyAction'
// import {createStaffRequest} from '../../action/requestingAction'
// import PropTypes from "prop-types";
// import isEmpty from '../../validation/isEmpty'
// import { CButton, CCard, CCol, CContainer, CHeaderNav, CNavLink, CRow } from '@coreui/react'
//
// class Requesting extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       staffRequest: true,
//       customerRequest: false,
//       errors: {},
//       company: {}
//     }
//   }
//   componentDidMount() {
//     if (this.props.match.params._id) {
//       this.props.getCurrentCompanyById(this.props.match.params._id)
//     }
//   }
//   UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
//     if (!isEmpty(nextProps.errors)) {
//       this.setState({ errors: nextProps.errors })
//       alert(nextProps.errors.request)
//     }
//     if (!isEmpty(nextProps.company.company)) {
//       this.setState({ company: nextProps.company.company })
//     }
//   }
//
//   onRequest = (event) =>{
//     event.preventDefault()
//     console.log("click click")
//     const data = {
//       staffRequest: this.state.staffRequest,
//       customerRequest: this.state.customerRequest,
//       company: this.props.company.company
//     }
//     this.props.createStaffRequest(data)
//   }
//
//   render (){
//
//     let someButton = (
//       <CCol xs={6}>
//         <CButton
//           color="danger"
//           className="px-3 btn-outline-light"
//           onClick={this.onRequest.bind(this)}
//         >
//           request Button
//         </CButton>
//       </CCol>
//     )
//     return (<h1>{someButton}</h1>)
//   }
// }
//
// Requesting.propTypes = {
//   getCurrentCompanyById: PropTypes.func.isRequired,
//   createStaffRequest: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   company: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }
// const mapStateToProps = (state) => ({
//   errors: state.errors,
//   company: state.company,
// })
// export default connect(mapStateToProps,{getCurrentCompanyById,createStaffRequest})(Requesting)

