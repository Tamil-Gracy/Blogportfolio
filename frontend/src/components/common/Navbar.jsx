import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import auth from "../../config/firebase";
import { signOut } from 'firebase/auth';

function Navbar() {
   const navigate = useNavigate();
   const [isUserLoggedIn, setUserLoggedin] = useState(false);
   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user) {
            console.log("User logged in ...");
            setUserLoggedin(true);
         }
         else {
            console.log("User logged out...");
            setUserLoggedin(false);
         }
      })
   }, [])

   const handleLogout = () => {
      signOut(auth);
      setUserLoggedin(false);
   }

   return (
      <div className='flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 py-5 sm:py-6'>
         <Link className='text-xl font-black tracking-tight text-stone-900 sm:text-2xl' to={"/home"}>Tamil<span className='text-orange-500'>.</span></Link>
         <div className='flex flex-wrap items-center justify-end gap-x-1 gap-y-2 sm:gap-x-3'>
            <Link className='rounded-full px-3 py-2 text-sm font-semibold text-stone-600 transition hover:bg-orange-50 hover:text-orange-600 sm:px-4' to={"/home"}>Home</Link>
            <Link className='rounded-full px-3 py-2 text-sm font-semibold text-stone-600 transition hover:bg-orange-50 hover:text-orange-600 sm:px-4' to={"/blogs"}>Blogs</Link>
            <Link className='rounded-full px-3 py-2 text-sm font-semibold text-stone-600 transition hover:bg-orange-50 hover:text-orange-600 sm:px-4' to={"/about"}>About</Link>
          
            {
               isUserLoggedIn ?
                  <button
                     className='button-style'
                     onClick={handleLogout}
                  >Logout</button>
                  : <button
                     className='button-style'
                     onClick={() => navigate("/login")}
                  >Login</button>
            }
            
         </div>
      </div>
   )
}

export default Navbar