import React from 'react'

export const ShowDonation = ()=>{
  return(
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
    <p>Show Donation</p>
        </div>
        <AppFooter />
      </div>
    </div>
          )
}
