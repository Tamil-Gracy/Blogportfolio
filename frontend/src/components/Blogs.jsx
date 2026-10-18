import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import Footer from './common/Footer';
import auth from "../config/firebase";

const API = import.meta.env.VITE_API_URL;

function Blogs() {

   const [blogs, setBlogs] = useState([]);
   const [admin, setAdmin] = useState(false);
   const [loading, setLoading] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [editId, setEditId] = useState(null);
   const [editTitle, setEditTitle] = useState('');
   const [editContent, setEditContent] = useState('');

   useEffect(() => {
      window.scrollTo(0, 0);
      auth.onAuthStateChanged((user) => {
         if (user) {
            if (user.uid === 'FbNg3gNEwee73j3mcwVCEOfjtd93') {
               console.log("Admin");
               setAdmin(true);
            } else {
               console.log("Not admin");
               setAdmin(false);
            }
         }
         else {
            console.log("User logged out...");
            setAdmin(false);
         }
      })

      axios.get(`${API}/api/blogs`).then((res) => {
         console.log(res.data);
         setLoading(true);
         setBlogs(res.data);

      }).catch((err) => {
         console.log("Error fetching data", err.message)
      }).finally(() => {
         setLoading(false);
      })

   }, [])



   const [newTitle, setNewTitle] = useState('');
   const [newContent, setNewContent] = useState('');


   const handleLike = async (blog_id) => {
      try {
         const response = await axios.patch(`${API}/api/blogs/like/${blog_id}`);
         // After successfully updating the likes count in the backend, fetch the updated list of blogs
         if (response.status === 200) {
            axios.get(`${API}/api/blogs`).then((res) => {
               console.log(res.data)
               setBlogs(res.data)
            }).catch(() => {
               console.log("Error fetching data")
            })
         }
      } catch (error) {
         console.error('Error liking the blog post:', error);
      }
   };

   const handleNewBlogSubmit = async (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
      const today = new Date();
      const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const likes = 0;
      try {
         await axios.post(`${API}/api/blogs`, {
            newTitle: newTitle,
            newContent: newContent,
            date: date,
            likes: likes
         });
         alert("Blog added successfully...");
         const res = await axios.get(`${API}/api/blogs`);
         setBlogs(res.data);
         setNewTitle('');
         setNewContent('');
      } catch (err) {
         consloe.log('Error in adding blog...', err);
      }

     
   };

   const openEditModal = (blog) => {
      setEditId(blog._id);
      setEditTitle(blog.newTitle);
      setEditContent(blog.newContent);
      setShowEditModal(true);
   };
   const closeModal = () => {
      setShowModal(false);
      setEditingId(null);
      setFormData({ newTitle: '', newContent: '' });
   };
   const handleUpdate = async (event) => {
      event.preventDefault();
      try {
         await axios.put(`${API}/api/blogs/${editId}`, {
            newTitle: editTitle,
            newContent: editContent,
         });

         setShowEditModal(false);
         const res = await axios.get(`${API}/api/blogs`);
         setBlogs(res.data);
         alert('Updated successfully...')
      } catch (error) {
         console.error("Error updating blog:", error);
      }
   };


   const handleDelete = async (blog_id) => {
      const sure = window.confirm("Are you sure you want to delete this blog?");
      if (!sure) return;

      try {
         await axios.delete(`${API}/api/blogs/${blog_id}`);
         setBlogs(blogs.filter((b) => b._id !== blog_id));
      } catch (error) {
         console.error("Error deleting blog:", error);
      }
   };

   return (
      <div className="blog-section py-12 sm:py-16">
         <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Notes & ideas</p>
         <h2 className="mb-12 text-center text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">Latest <span className='text-orange-500'>blogs</span> 📚</h2>

         {/* Blog creation form */}
         {

            admin ? <div className="blog-creation-form mx-auto mb-10 max-w-3xl rounded-3xl border border-orange-100 bg-orange-50/60 p-5 sm:p-8">
               <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-stone-900">Create a blog post</h3>
                  <input
                     type="text"
                     placeholder="Blog Title"
                     value={newTitle}
                     onChange={(e) => setNewTitle(e.target.value)}
                     className="rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                     required
                  />
                  <textarea
                     placeholder="Blog Content"
                     value={newContent}
                     onChange={(e) => setNewContent(e.target.value)}
                     className="resize-y rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                     rows="4"
                     required
                  />
                  <button type="submit" className="button-style self-start">
                     Add Blog
                  </button>
               </form>
            </div>
               : ""
         }


         <div className="blogs-container mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {loading ? (
               <p className="col-span-full py-10 text-center text-lg font-semibold text-orange-600">
                  Loading blogs...
               </p>
            ) : blogs.length === 0 ? (
               <p className="col-span-full py-10 text-center text-stone-500">
                  No blogs available.
               </p>
            ) : (blogs.map((blog) => (
               <div key={blog._id} className="blog-post rounded-3xl border border-stone-100 bg-stone-50/70 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                  <h3 className="blog-title mb-3 text-2xl font-bold leading-snug text-stone-900">{blog.newTitle}</h3>
                  <p className="blog-date mb-5 text-sm font-medium text-stone-400">{blog.date}</p>
                  <p className="blog-content mb-6 whitespace-pre-wrap leading-7 text-stone-600">{blog.newContent}</p>
                  <div className='flex justify-between'>
                     <div>
                        <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700 transition hover:bg-orange-200" onClick={() => handleLike(blog._id)}>♡ <span>Like</span></span>
                        <span className="ml-3 text-sm font-medium text-stone-500">{blog.likes} Likes</span>
                     </div>
                     {admin ? (
                        <div className='actions flex justify-between gap-3'>
                           <button
                              className='bg-blue-100 px-4 py-2 text-sm font-bold rounded cursor-pointer'
                              onClick={() => openEditModal(blog)}

                           >Edit</button>
                           <button className='bg-red-100 px-4 py-2 text-sm font-bold rounded cursor-pointer' onClick={() => handleDelete(blog._id)}>Delete</button>
                        </div>
                     ) : ''}
                  </div>


               </div>
            )))}

            {admin && showEditModal && (
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                  <div className="relative w-full max-w-xl rounded-3xl bg-white p-5 shadow-2xl sm:p-8">
                     <button type="button" onClick={closeModal} className="absolute right-4 top-4 text-2xl text-stone-400 hover:text-stone-700">×</button>

                     <form className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-stone-900">
                           Edit Blog Post
                        </h3>
                        <input
                           name="newTitle"
                           value={editTitle}
                           onChange={(e) => setEditTitle(e.target.value)}
                           className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-400"
                        />
                        <textarea
                           name="newContent"
                           value={editContent}
                           onChange={(e) => setEditContent(e.target.value)}
                           rows="4"
                           className="resize-y rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-orange-400"
                        />
                        <button onClick={handleUpdate} className="button-style self-start cursor-pointer">
                           Save Changes
                        </button>
                     </form>
                  </div>
               </div>
            )}

         </div>

         <Footer />
      </div>
   );
}

export default Blogs