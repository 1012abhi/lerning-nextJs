const SingleArticlePage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

    const { id } = await params
    console.log(id);
    
  return (
    <div>
      SingleArticlePage: {id}
    </div>
  )
};
    
export default SingleArticlePage
