import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBank,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDollar,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
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
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Actions',
  },
  {
    component: CNavGroup,
    name: 'Organizations',
    to: '/organizations',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Show Organizations',
        to: '/organizations/showorg',
      },
      {
        component: CNavItem,
        name: 'Hire Staff',
        to: '/organizations/hire',
      },
      {
        component: CNavItem,
        name: 'Show Staff',
        to: '/organizations/showstaff',
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

export default _nav
