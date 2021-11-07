import React, { lazy, Component } from 'react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cilUserX,
  cilPeople,
  cilUser,
  cilGroup,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import {
  CAvatar,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell className="text-center">
                <CIcon icon={cilPeople} />
              </CTableHeaderCell>
              <CTableHeaderCell>People</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Role</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Activity</CTableHeaderCell>
              <CTableHeaderCell>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.user.name}</div>
                  <div className="small text-medium-emphasis">
                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                    {item.user.registered}
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" icon={item.role.type} title={item.role.name} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>{item.activity}</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <CIcon size="xl" icon={cilUserX} />
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </>
    )
  }
}
const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Jan 1, 2021',
    },
    role: { name: 'Owner', type: cilGroup },
    payment: { name: 'Mastercard', icon: cibCcMastercard },
    activity: '10 sec ago',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Avram Tarasios',
      new: false,
      registered: 'Jan 1, 2021',
    },
    role: { name: 'Staff', type: cilUser },
    payment: { name: 'Visa', icon: cibCcVisa },
    activity: '5 minutes ago',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
    role: { name: 'Staff', type: cilUser },
    payment: { name: 'Stripe', icon: cibCcStripe },
    activity: '1 hour ago',
  },
  {
    avatar: { src: avatar4, status: 'secondary' },
    user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
    role: { name: 'Staff', type: cilUser },
    payment: { name: 'PayPal', icon: cibCcPaypal },
    activity: 'Last month',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Jan 1, 2021',
    },
    role: { name: 'Staff', type: cilUser },
    payment: { name: 'Google Wallet', icon: cibCcApplePay },
    activity: 'Last week',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'Friderik Dávid',
      new: true,
      registered: 'Jan 1, 2021',
    },
    role: { name: 'Staff', type: cilUser },
    payment: { name: 'Amex', icon: cibCcAmex },
    activity: 'Last week',
  },
]
export default Dashboard
