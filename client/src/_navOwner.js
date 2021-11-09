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
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/profile',
      },
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
        name: 'Set up Application',
        to: '/organization/startapp',
      },
      {
        component: CNavItem,
        name: 'Hire Staff',
        to: '/organization/hirestaff',
      },
      {
        component: CNavItem,
        name: 'Show Organization',
        to: '/organization',
      },
      {
        component: CNavItem,
        name: 'Edit Organization',
        to: '/organization/edit',
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
