import React from 'react'
import { Nav, ButtonGroup } from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

import profilePlaceholder from '../assets/profile_placeholder.png'

export default function NavBar() {
  return (
    <Nav className='justify-content-between p-3'>
        <Nav.Item>
          <img style={{width: '2em'}} src={profilePlaceholder} />
        </Nav.Item>
        <Nav.Item>
          <h3>Dyd</h3>
        </Nav.Item>
        <Nav.Item>
          <ButtonGroup>
          <LoginButton>Login</LoginButton>
          <LogoutButton>Logout</LogoutButton>
          </ButtonGroup>
        </Nav.Item>
      </Nav>
  )
}
