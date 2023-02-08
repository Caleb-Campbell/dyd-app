import { useState } from 'react'
import { Button, Nav, Stack, ButtonGroup } from 'react-bootstrap'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './components/Profile';
import NavBar from './components/NavBar';

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  const { user, isAuthenticated, isLoading } = useAuth0()


  return (
    <Stack>
      <NavBar />
      <Stack gap={2} className='mt-5'>
        <h1 className='text-center fw-bold' style={{fontSize: '6em'}}>Dyd</h1>
        <h2 className='text-center text-secondary'>Share what you dyd.</h2>
      </Stack>
      {isLoading && <h2>Loading...</h2>}
      <h2 className='text-center'>User is {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h2>
      {isAuthenticated && (
        <Profile />
        )}
        {/* <Button onClick={()=>{console.log(user)}}>Get User Info</Button> */}
    </Stack>
  )
}

export default App
