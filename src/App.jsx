import { useState } from 'react'
import { Button, Nav, Stack, ButtonGroup } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

//components
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import PostFeed from './components/PostFeed';

function App() {
  const postDummyData = [
    {
      postid: 1234,
      author: 'Katlyn Campbell',
      title: 'A new Capybara project',
      text: 'hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity',
      img: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DF5lemdBpoYs1fHJ4AiznAHaFj%26pid%3DApi&f=1&ipt=921c19a7cbb3b0311a1ee58ff45de73741360d8ba9aef955eda82f52cb195bab&ipo=images'],
      date: '02/06/23',
      categories: ['crochet', 'animals', 'yarn']
    },
    {
      postid: 23123,
      author: 'Caleb Campbell',
      title: 'A new rocket project',
      text: 'hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity',
      img: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OQCT9uOiozmn5DgAz6g2bQHaE8%26pid%3DApi&f=1&ipt=67e88ef3e4ca72748f47803091420fc24864c4dea6f673747bfc9eb2c4292c01&ipo=images', 'https://i5.walmartimages.com/asr/6a8441ab-6da7-42b1-83b5-5812d5f33e96_1.25ddf17a1d5f5f07f695002b6b566921.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff', 'https://i.redd.it/9zwz5gcpfth41.jpg'],
      date: '02/08/23',
      categories: ['rockets', '3DPrinting', 'plastics']
    },
    {
      postid: 14421234,
      author: 'Gabi Campbell',
      title: 'A new plant project',
      text: 'hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity hoobidty doobity doobity',
      img: ['https://www.flowerdaise.com.au/wp-content/uploads/2021/02/0179-scaled.jpg'],
      date: '02/06/23',
      categories: ['plants', 'grow']
    },
    
  ]
  const [loggedIn, setLoggedIn] = useState(true)
  const [posts, setPosts] = useState(postDummyData)

  const { user, isAuthenticated, isLoading } = useAuth0()



  return (
    <Stack>
      <NavBar />
      <Stack gap={2} className='mt-5'>
        <h1 className='text-center fw-bold' style={{fontSize: '6em'}}>Dyd</h1>
        <h2 className='text-center text-secondary'>Share what you dyd.</h2>
      </Stack>
      {isLoading && <h2>Loading...</h2>}
      {!isAuthenticated && <h2 className='text-center'>Sign in to See Feed</h2>}
      {isAuthenticated && (
        <PostFeed posts={posts} />
        )}
        {/* <Button onClick={()=>{console.log(user)}}>Get User Info</Button> */}
    </Stack>
  )
}

export default App
