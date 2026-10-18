import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from "../config/firebase";

function Signup() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate(); // Hook from React Router for navigation

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user) {
            navigate('/home');
         }
      })
   }, [navigate])

   const handleSubmit = (e) => {
      e.preventDefault();

      // Check if the passwords match
      if (password !== confirmPassword) {
         setError('Passwords do not match');
         return;
      }

      createUserWithEmailAndPassword(auth, email, password)
         .then((res) => {
            console.log(res);
            alert("Registered successfully...");
         })
         .catch((err) => {
            console.log(err);
            alert("Failed to add user...")
         })
      
      navigate('/login'); 
   };

   return (
      <div className="flex min-h-[70vh] items-center justify-center py-12">
         <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-3xl border border-stone-100 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Join the community</p>
            <h2 className="mb-8 text-3xl font-black tracking-tight text-stone-900">Create your account</h2>
            <div className="mb-5">
               <label className="block text-sm font-semibold text-stone-700">Email</label>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
               />
            </div>
            <div className="mb-5">
               <label className="block text-sm font-semibold text-stone-700">Password</label>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
               />
            </div>
            <div className="mb-5">
               <label className="block text-sm font-semibold text-stone-700">Confirm password</label>
               <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
               />
               {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
            </div>
            <p className='my-5 cursor-pointer text-sm font-medium text-stone-500 transition hover:text-orange-600' onClick={() => navigate("/login")}>Already have an account? <span className="font-bold text-orange-600">Login here</span></p>
            <button
               type="submit"
               className="button-style w-full"
               onClick={handleSubmit}
            >
               Register
            </button>
         </form>
      </div>
   );
}

export default Signup;
