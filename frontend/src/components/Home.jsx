import React from 'react'
import BlogProfileImage from "../assets/tamilprofile.png"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='relative my-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100 px-6 py-10 sm:my-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20'>
                <div className='pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl' aria-hidden="true"></div>
                <div className='relative grid items-center gap-10 md:grid-cols-2 md:gap-14'>
                    <div className="order-2 md:order-1">
                        <p className='mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700'><span className='h-2 w-2 rounded-full bg-emerald-500'></span> Designer · Developer</p>
                        <h1 className='text-4xl font-black leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl'>Turning ideas into <span className='text-orange-500'>digital experiences.</span></h1>
                   <p className='mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg'>Hi, I’m Tamil 👋. I create thoughtful, modern websites that help businesses make a great first impression. Explore my work and see what we could build together.</p>
                        <div className='mt-7 flex flex-wrap items-center gap-4'>
                            <button className='button-style'>Hire Me</button>
                            <span className='text-sm font-medium text-stone-500'>Building for the web, one idea at a time.</span>
                        </div>
                    </div>
                    <div className='relative order-1 mx-auto w-full max-w-md md:order-2'>
                        <div className='absolute -inset-3 rotate-3 rounded-[2rem] border border-orange-200/70 bg-white/50' aria-hidden="true"></div>
                        <img src={BlogProfileImage} className='relative mx-auto aspect-square w-full rounded-[1.5rem] object-cover shadow-2xl shadow-stone-900/15' alt="Jacky Thomas, web designer and developer" />
                        <div className='absolute -bottom-5 -left-3 rounded-2xl border border-stone-100 bg-white px-5 py-3 shadow-lg sm:-left-8'>
                            <p className='text-xs font-semibold uppercase tracking-widest text-stone-400'>Currently</p>
                            <p className='mt-1 flex items-center gap-2 font-bold text-stone-800'><span className='h-2 w-2 rounded-full bg-emerald-500'></span>Open to opportunities</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-wrap items-center justify-center gap-5 border-y border-stone-100 py-6 sm:gap-10'>
                <img src={HTML} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="HTML" />
             <img src={CSS} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="CSS" />
             <img src={JS} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="JavaScript" />
             <img src={REACTICON} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="React" />
             <img src={DB} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="Database" />
             <img src={NODE} className='h-10 w-10 object-contain transition duration-200 hover:-translate-y-1' alt="Node.js" />
            </div>

            <div className='grid items-center gap-12 py-16 sm:py-20 md:grid-cols-2 lg:gap-20'>
                <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='rounded-3xl border border-stone-100 bg-white p-7 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl'>
                        <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-2xl font-black text-purple-700'>6</div>
                        <p className='mt-4 font-semibold text-stone-700'>Projects completed</p>
                    </div>
                    <div className='rounded-3xl border border-stone-100 bg-white p-7 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl'>
                        <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-black text-emerald-700'>6</div>
                        <p className='mt-4 font-semibold text-stone-700'>Months of experience</p>
                    </div>
                </div>

                <div>
                    <p className='mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-600'>A little about me</p>
                    <h2 className='text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl'>My services, <span className='text-orange-500'>your vision.</span></h2>
                    <p className='mt-5 max-w-lg leading-7 text-stone-600'>From an idea to a finished website, I bring design and development together to create useful digital experiences. Take a look at my resume for more details.</p>
                    <button className='button-style mt-7'>Download CV</button>

                </div>




            </div>

            <section className='py-6 sm:py-10' aria-labelledby='services-heading'>
                <div className='mb-8 text-center'>
                    <p className='text-sm font-bold uppercase tracking-[0.2em] text-orange-600'>How I can help</p>
                    <h2 id='services-heading' className='mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl'>Good ideas, built <span className='text-orange-500'>beautifully.</span></h2>
                </div>
                <div className='grid gap-5 md:grid-cols-3'>
                    <article className='group rounded-3xl border border-stone-100 bg-stone-50/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl font-black text-orange-700 transition group-hover:bg-orange-500 group-hover:text-white'>01</div>
                        <h3 className='mt-6 text-xl font-bold text-stone-900'>Web development</h3>
                        <p className='mt-3 leading-7 text-stone-600'>Modern, responsive websites built to look great and work smoothly across devices.</p>
                    </article>
                    <article className='group rounded-3xl border border-stone-100 bg-stone-50/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl font-black text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white'>02</div>
                        <h3 className='mt-6 text-xl font-bold text-stone-900'>UI implementation</h3>
                        <p className='mt-3 leading-7 text-stone-600'>Clean, accessible interfaces that turn a visual direction into a polished experience.</p>
                    </article>
                    <article className='group rounded-3xl border border-stone-100 bg-stone-50/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-black text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white'>03</div>
                        <h3 className='mt-6 text-xl font-bold text-stone-900'>Creative problem-solving</h3>
                        <p className='mt-3 leading-7 text-stone-600'>Thoughtful ideas and practical solutions to make your next project stand out.</p>
                    </article>
                </div>
            </section>


            <section className='py-16 sm:py-20' aria-labelledby='projects-heading'>
                <p className='text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-600'>Selected work</p>
                <h2 id='projects-heading' className='my-3 text-center text-3xl font-black tracking-tight text-stone-900 sm:text-4xl'>A few things I’ve <span className='text-orange-500'>made</span></h2>
                <p className='mx-auto max-w-xl text-center leading-7 text-stone-500'>A selection of projects where design, detail, and development come together.</p>
                <div className='my-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>

                    <article className='group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                        <div className='overflow-hidden bg-stone-100'><img src={P1} className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105' alt="Project preview 1" /></div>
                        <div className='p-5'><p className='text-xs font-bold uppercase tracking-widest text-orange-600'>Web design</p><h3 className='mt-2 text-lg font-bold text-stone-900'>Creative project</h3></div>
                    </article>

                    <article className='group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                        <div className='overflow-hidden bg-stone-100'><img src={P2} className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105' alt="Project preview 2" /></div>
                        <div className='p-5'><p className='text-xs font-bold uppercase tracking-widest text-orange-600'>Frontend development</p><h3 className='mt-2 text-lg font-bold text-stone-900'>Digital experience</h3></div>
                    </article>

                    <article className='group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                        <div className='overflow-hidden bg-stone-100'><img src={P3} className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105' alt="Project preview 3" /></div>
                        <div className='p-5'><p className='text-xs font-bold uppercase tracking-widest text-orange-600'>Web development</p><h3 className='mt-2 text-lg font-bold text-stone-900'>Portfolio project</h3></div>
                    </article>

                </div>
            </section>


            <div className='my-16 grid items-center gap-9 overflow-hidden rounded-[2rem] bg-stone-900 px-7 py-10 sm:my-20 sm:px-12 md:grid-cols-2 md:gap-14'>
                <div className='mx-auto w-full max-w-sm'>
                    <img src={BlogImage} className='w-full rounded-2xl object-cover shadow-xl' alt="Illustration for the technology blog" />

                </div>
                <div>
                    <p className='mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300'>Ideas & insights</p>
                    <h2 className='text-3xl font-black leading-tight text-white sm:text-5xl'>I like to write <span className='text-orange-400'>about tech.</span></h2>

                    <p className='mt-5 max-w-lg leading-7 text-stone-300'>Get to know how I think and work. I share practical notes, new ideas, and lessons from my projects.</p>
                    <button className='button-style mt-7' onClick={() => navigate("/blogs")}>Read my blogs</button>
                </div>


            </div>


            <Footer/>


        </div>
    )
}

export default Home