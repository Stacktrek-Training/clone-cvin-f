import React from 'react'
import StkLogo from './assets/images/stacktrek.png'
import ToggleButton from './assets/images/toggle-icon.svg'

import { Navbar } from 'flowbite-react'


export default function Navbar() {
  return (
    <Navbar className='!bg-stacktrek border-current'
    fluid
  >
    <Navbar.Toggle>
    <img
        alt="StackTrek"
        className="bars-3-bottom-left"
        src={ToggleButton}
      />

    </Navbar.Toggle>

    <Navbar.Brand href="/navbars">
      <img
        alt="StackTrek"
        className="mr-3 h-6 sm:h-9 "
        src={StkLogo}
      />
    </Navbar.Brand>
    
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
