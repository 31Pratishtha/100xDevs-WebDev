export default async function PostPage ({params}: {
  params: {
    todos: string[]
  }
}) {
  const todoIds = params.todos

  console.log('params: ', todoIds)


  return (
    <>
      <div>
        Todo Page  {JSON.stringify(todoIds)}
      </div>
      <br />
    </>
  )
}