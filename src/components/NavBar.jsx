import React from 'react'
import { Nav, ButtonGroup } from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function NavBar() {
  return (
    <Nav className='justify-content-between p-3'>
        <Nav.Item>
          
        </Nav.Item>
        <Nav.Item>
          <h3>Logo</h3>
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
