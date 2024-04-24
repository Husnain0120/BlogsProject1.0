import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { MdReadMore } from "react-icons/md";
import './BlogPost.css'

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0
              ?
              <>
                {getAllBlog.map((item, index) => {
                  const { thumbnail, id, date } = item
                 
                  return (
                    <div className="p-4 md:w-1/3" key={index}>
                      <div
                        style={{
                          background: mode === 'dark'
                            ? 'rgb(30, 41, 59)'
                            : 'white',
                          borderBottom: mode === 'dark'
                            ?
                            ' 4px solid rgb(226, 232, 240)'
                            : ' 4px solid rgb(30, 41, 59)'
                        }}
                        className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                        ${mode === 'dark'
                            ? 'shadow-gray-700'
                            : 'shadow-xl'
                            } 
                        rounded-xl overflow-hidden`} 
                      >
                        {/* Blog Thumbnail  */}
                        <img onClick={() => navigate(`/bloginfo/${id}`)} className=" w-full" src={thumbnail} alt="blog" />

                        {/* Top Items  */}
                        <div className="p-6">
                          {/* Blog Date  */}
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            {date}
                          </h2>

                          {/* Blog Title  */}
                          <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            {item.blogs.title}
                          </h1>

                          {/* Blog Description  */}
                          <p className="leading-relaxed mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(226, 232, 240)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
              :
              <div>
              <svg 
              preserveAspectRatio="xMidYMid meet" viewBox="0 0 187.3 93.7" height="300px" width="400px">
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#4E4FEB"></path>
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#4E4FEB" fill="none" opacity="0.05" id="outline-bg"></path>
          </svg>
          </div>
            }
          </div>
          
          {/* See More Button  */}
          {getAllBlog.length > 0 && (
            <div className="flex justify-center my-5">
              <Link to={'/allblogs'}>
                <Button
                  style={{
                    background: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : 'rgb(30, 41, 59)',
                    color: mode === 'dark'
                      ? 'rgb(30, 41, 59)'
                      : 'rgb(226, 232, 240)'
                  }}>
                  <span><MdReadMore className=' md:hidden text-[30px] text-red-900' /><span className=' hidden md:block'>Seemore</span></span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPostCard
