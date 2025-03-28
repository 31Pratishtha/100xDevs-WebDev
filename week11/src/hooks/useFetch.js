// import { useState, useEffect } from "react"

// export const usePostTitle = () => {
//   const [post, setPost] = useState([])

  async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    setPost(json)
  }

  useEffect(() => {
    getPosts()
  }, [])

//   return post.title

// }

// export function useFetch(url) {
//   const [data, setData] = useState({})
//   const [loading, setLoading] = useState(true)

//   async function getDetails() {
//     setLoading(true)
//     const res = await fetch(url)
//     const json = await res.json()
//     setData(json)
//     setLoading(false)
//   }

//   useEffect(() => {
//     getDetails()
//   }, [url])

//   useEffect(() => {
//     const refetch = setInterval(getDetails, 3 * 1000)

//     return () => clearInterval(refetch)
//   }, [])

//   return { data, loading }
// }