import axios from "axios"

export default async function BlogPage ({params}: {
  params: {
    postId: string
  }
}) {
  const postId = params.postId

  console.log('params: ', params)

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = res.data
  return (
    <>
      <div>
        Blog Page  {postId}
      </div>
      <br />
      <div>
        title: {data.title}
        <br />
        body: {data.body}
      </div>
    </>
  )
}