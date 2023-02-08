import { useState } from 'react'
import { Nav, Stack } from 'react-bootstrap'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  const { isAuthenticated, isLoading } = useAuth0()


  return (
    <Stack>
      <Nav className='justify-content-between p-3'>
        <Nav.Item>
          <h3>Logo</h3>
        </Nav.Item>
        <Nav.Item>
          <div>
          <LoginButton>Login</LoginButton>
          {loggedIn && <LogoutButton>Logout</LogoutButton>}
          </div>
        </Nav.Item>
      </Nav>
      <Stack gap={2} className='mt-5'>
        <h1 className='text-center fw-bold' style={{fontSize: '6em'}}>Dyd</h1>
        <h2 className='text-center text-secondary'>Share what you dyd.</h2>
      </Stack>
      {isLoading && <h2>Loading...</h2>}
      <h2 className='text-center'>User is {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h2>
    </Stack>
  )
}

export default App
