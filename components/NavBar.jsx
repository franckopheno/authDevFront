"use client";
import { Fugaz_One } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import Button from './design-system/Button';
import { Navbar } from 'flowbite-react';
import logo from '../public/svg/AuthDev.svg'
import Image from 'next/image';

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

// const navLinkClass = `block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;
// const navLinkClassActive = `block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-primary md:p-0 md:dark:text-blue-500`;

export default function NavBar() {
  return (    
    <Navbar className='bg-white dark:bg-gray-900 w-full z-0 top-0 start-0 border-b border-gray-200 dark:border-gray-600' fluid rounded>
    <Navbar.Brand href="https://flowbite.com/">
    <Image
        src={logo}
        className="mr-3 w-full h-auot sm:hidden xs:hidden sm:h-9"
        alt="Authentic Dev Logo"
    />
    <span className={"self-center text-2xl text-primary font-semibold whitespace-nowrap dark:text-white " + fugaz.className }>
        {process.env.NEXT_PUBLIC_APP_NAME}
    </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
    <Navbar.Link href="/navbars" active>
        Acueil
    </Navbar.Link>
    <Navbar.Link href="/navbars">A propos</Navbar.Link>
    <Navbar.Link href="/navbars">Services</Navbar.Link>
    <Navbar.Link href="/navbars">Temoignages</Navbar.Link>
    <Navbar.Link href="/navbars">Contact</Navbar.Link>
    <Navbar.Link className='md:hidden sm:flex xs:flex' href="/navbars">Soumettre le project</Navbar.Link>
    </Navbar.Collapse>
    <button type="button" className="text-info hidden md:flex bg-secondary hover:bg-secondary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Soumetter le projet
    </button>
    </Navbar>
  )
}
