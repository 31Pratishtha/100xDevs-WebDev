import React from 'react'
import axios from 'axios'

async function getBlogs(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return res.data
}
const Blogs = async () => {

  const blogs = await getBlogs()

  return (
    <>
      <div>Learn from best resources</div>
      <div>
        {blogs.map((blog: ITodo) => (
          <Todo title={blog.title} completed={blog.completed} id={blog.id} key={blog.id}/>
        ))}
      </div>
    </>
  )
}

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

function Todo ({title, completed}: ITodo) {
  return (
    <>
      <div>
        {title} : {completed ? 'done' : 'not done'}
      </div>
    </>
  )
}

export default Blogs