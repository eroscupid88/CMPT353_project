import React from 'react'
import { Link } from 'react-router-dom'
const ProfileAction = (props) => {
  console.log(props)
  let companyItem
  if ((props.user.email = 'dillon@yahoo.com') && (props.mycompany.company===null)){
    companyItem = (
      <Link to="/create-company" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Create Company
      </Link>
    )

  }
  // else if ((props.user.id = '618d4d34c83a8e755ff6d7e8') && (props.mycompany.company[0].owner === props.user.id)){
  //  companyItem= (
  //     <Link to="/create-company" className="btn btn-light">
  //       <i className="fas fa-user-circle text-info mr-1" /> Edit Company
  //     </Link>
  //   )
  // }
  else{
    companyItem=null
  }
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      {companyItem}
    </div>

  )
}

export default ProfileAction
