import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBank, cilDollar, cilSpeedometer, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _navOwner = [
  {
    component: CNavTitle,
    name: 'Options',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Home',
        to: '/about',
      }
    ],
  },
  {
    component: CNavTitle,
    name: 'Actions',
  },
  {
    component: CNavGroup,
    name: 'Organization',
    to: '/organization',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Organization',
        to: '/organization',
      },
      {
        component: CNavItem,
        name: 'Edit Organization',
        to: '/edit-company',
      },
      {
        component: CNavItem,
        name: 'Application Request',
        to: '/manage',
      },
      {
        component: CNavItem,
        name: 'Show Staff',
        to: '/staff',
      },
      {
        component: CNavItem,
        name: 'Show Customer',
        to: '/customer',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Donate',
    to: '/donate',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
]

export default _navOwner
