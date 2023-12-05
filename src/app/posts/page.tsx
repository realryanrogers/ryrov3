import PostPreview from "@/components/PostPreview";
import getPostMetaData from "@/components/getPostMetaData";
import { aborted } from "util";

const PostsPage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.filter((post) => {
    return post.category === "Writing" ? true : false
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

export default PostsPage;