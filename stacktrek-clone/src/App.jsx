import React from 'react';
import StkLogo from './assets/images/stacktrek.png'

import { Navbar } from 'flowbite-react'

function App() {
  return (
    <Navbar className='!bg-stacktrek'
  fluid
 
>
  <Navbar.Brand href="/navbars">
    <img
      alt="StackTrek"
      className="mr-3 h-6 sm:h-9 p-1"
      src={StkLogo}
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      active
      href="/navbars"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default App