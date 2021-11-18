import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSnowflake } from '@coreui/icons'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigationOwner from '../_navOwner'
import navigationStaff from '../_navStaff'
import { SET } from '../action/types'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const isOwner = true

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: SET, sidebarShow: visible })
      }}
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

      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: SET, sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
