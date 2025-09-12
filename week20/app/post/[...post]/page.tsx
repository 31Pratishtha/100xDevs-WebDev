export default async function PostPage ({params}: {
  params: {
    post: string[]
  }
}) {
  const postId = params.post

  console.log('params: ', postId)


  return (
    <>
      <div>
        Post Page  {JSON.stringify(postId)}
      </div>
      <br />
    </>
  )
}