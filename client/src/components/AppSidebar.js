import React, { Component } from 'react'
import { connect  } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSnowflake } from '@coreui/icons'

import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigationOwner from '../_navOwner'
import navigationStaff from '../_navStaff'
import { SET } from '../action/types'

class AppSidebar extends Component {
  render(){
    const isOwner = true
    return (
      <CSidebar
        position="fixed"
      >
        <CSidebarBrand className="brand d-none d-lg-flex" to="/">
          <h1>Nomosn</h1>
          <CIcon icon={cilSnowflake} className="icon-xl icon" />
          <h1>w</h1>
        </CSidebarBrand>

        <CSidebarNav>
          <SimpleBar>
            {isOwner ? (
              <AppSidebarNav items={navigationOwner} />
            ) : (
              <AppSidebarNav items={navigationStaff} />
            )}
          </SimpleBar>
        </CSidebarNav>

      </CSidebar>
    )
  }
}

export default connect()(AppSidebar)
