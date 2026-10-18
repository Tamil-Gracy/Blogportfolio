import { Link } from "react-router-dom";

const skills = [
   "HTML",
   "CSS",
   "Tailwind CSS",
   "JavaScript",
   "React",
   "Node.js",
   "Express",
   "MongoDB",
];

const stats = [
   { label: "Projects built", value: "15+" },
   { label: "Live projects deployed", value: "10+" },
   { label: "Technologies learned", value: "8+" },
];

function About() {
   return (
      <section className="py-12 sm:py-16">
         {/* Intro */}
         <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-stone-900 text-5xl font-bold text-white">
               T
            </div>

            <div>
               <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                  About me
               </p>
               <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
                  Hi, I'm Tamil
               </h1>
               <p className="mt-4  text-lg  text-stone-600">
                  I am a web developer who is learning the MERN stack to become a
                  Full Stack Developer. I enjoy building small, useful projects and
                  writing about what I learn along the way.
               </p>
            </div>
         </div>

         {/* Stats */}
         <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
               <div
                  key={item.label}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center"
               >
                  <p className="text-3xl font-bold text-stone-900">{item.value}</p>
                  <p className="mt-1 text-sm text-stone-500">{item.label}</p>
               </div>
            ))}
         </div>

         {/* Story */}
         <div className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900">My journey</h2>
            <p className="mt-3  text-stone-600">
               I started with HTML and CSS, then moved to JavaScript and React. Now I
               am building full stack apps with Node.js, Express and MongoDB. I learn
               best by building real projects, so this blog and portfolio is one of
               them.
            </p>
         </div>

         {/* Skills */}
         <div className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
               {skills.map((skill) => (
                  <span
                     key={skill}
                     className="rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-stone-900 hover:text-white"
                  >
                     {skill}
                  </span>
               ))}
            </div>
         </div>

         {/* Call to action */}
         <div className="mt-14 rounded-2xl bg-stone-900 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-white">Want to read my blogs?</h2>
            <p className="mt-2 text-stone-300">
               I share what I learn about web development.
            </p>
            <Link
               to="/blogs"
               className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-200"
            >
               Go to Blogs
            </Link>
         </div>
      </section>
   );
}

export default About;