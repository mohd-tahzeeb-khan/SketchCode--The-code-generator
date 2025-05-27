'use client';

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import UserProvider from '@/context/userContextProvider';
import AiCreateProvider from '@/context/createContextProvider';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans+Arabic:wght@100..800&display=swap" rel="stylesheet"></link>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <UserProvider>
            <AiCreateProvider>
              <Header />
              {children}
            </AiCreateProvider>
          </UserProvider>
        </body>


      </html>

    </ClerkProvider>
  );
}


function Header() {
  return (



    <header className="flex justify-between items-center p-4 gap-4 h-16 bg-gray-800">
      <h1 className='logo-font text-2xl text-white text-shadow-teal-600 text-shadow-md mx-10'>Sketch Code</h1>


      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}