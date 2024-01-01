import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}


const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug);
    return (
        <>
            <h1>{post.data.title}</h1><small>{`${post.data.date.getFullYear()}-${post.data.date.getMonth() + 1}-${post.data.date.getDate()}`}</small>
            <Markdown>
                {post.content}
            </Markdown>
        </>
        
    )
}
export default PostPage