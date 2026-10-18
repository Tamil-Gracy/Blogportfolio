import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from "../config/firebase";

function Login() {
   const navigate = useNavigate()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      window.scrollTo(0, 0);
      auth.onAuthStateChanged((user) => {
         if (user) {
            console.log("User logged in ...");
            navigate('/home');
            return;
         }
      })
   }, [navigate]);

   const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
            console.log(res);
            alert("Logged in successfully...");
            navigate('/home');
         })
         .catch((err) => {
            console.log(err);
            alert("Failed to login.Please try again...");
         })
      
   };

   return (
      <div className="flex min-h-[70vh] items-center justify-center py-12">
         <form onSubmit={handleLogin} className="w-full max-w-lg rounded-3xl border border-stone-100 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Welcome back</p>
            <h2 className="mb-8 text-3xl font-black tracking-tight text-stone-900">Login to your account</h2>
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
            <p className='my-5 cursor-pointer text-sm font-medium text-stone-500 transition hover:text-orange-600' onClick={() => navigate("/signup")}>New user? <span className="font-bold text-orange-600">Register here</span></p>
            <button type="submit" className="button-style w-full">
               Login
            </button>
         </form>
      </div>
   );
}

export default Login;
