import PostPreview from "@/components/PostPreview";
import getPostMetaData from "@/components/getPostMetaData";

const LibraryPage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.filter((post) => {
    return post.category === "Notes" ? true : false
  }).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }).map((post) => (
    
    <PostPreview key={post.slug} {...post} />
    
  ))

  return(
    <div>
      {postPreviews}
    </div>
  )
}

export default LibraryPage;