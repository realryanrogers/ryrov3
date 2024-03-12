import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getNoteMetaData from "@/components/getNoteMetaData";
import Link from "next/link";
import Image from "next/image";

const getNoteContent = (slug: string) => {
    const folder = "src/notes/";
    const file = `${folder}${slug}.md`;
    console.log(file)
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getNoteMetaData();
    return posts.map((note) => ({
        slug: note.slug,
    }))
}

const starring = (e:string[]) =>{
    if(typeof e === 'undefined') {
        return ""
    } else {
        return e.join(", ").replace(/[\])}[{(]/g, '')
    }
} 

const noteInfo = (post: matter.GrayMatterFile<string>) => {
    if (post.data.Type == "Movie"){
        return (
            <div className="noteInfo">         
                <h2>{post.data.Title}</h2>
                <small>{post.data.Released.getFullYear()}</small> | <small>Rating: {post.data.Rating}/10</small>
                <p>
                    Directed by: {post.data.Director.replace(/[\])}[{(]/g, '')}
                </p>
                <p>
                    Starring: {starring(post.data.Starring)}
                </p>                  
                <p>
                    {post.data.NoteSummary}
                </p>              
            </div> 
        )
    } else if(post.data.Type == "Game"){
        return(
        <div className="noteInfo">         
                <h2>{post.data.Title}</h2>
                <small>{post.data.Released.getFullYear()}</small> | <small>Rating: {post.data.Rating}/10</small>
                <p>
                    Developer: {post.data.Developer.replace(/[\])}[{(]/g, '')}
                </p>
                <p>
                    Publisher: {post.data.Publisher.replace(/[\])}[{(]/g, '')}
                </p>                  
                <p>
                    {post.data.NoteSummary}
                </p>              
            </div> 
        )
    }
}


const NotePage = (props: any) => {
    const slug = props.params.slug
    const post = getNoteContent(slug);
    console.log(post)
    return (
        <>
            <div className="noteContainer">
                <div className="imageContainer">
                    <Image src={post.data.CoverURL} alt="cover" width={100} height={post.data.Type == "Movie" ?  150 : 134}/>
                </div>
                {noteInfo(post)}
                  
            </div>
            <hr/> 
            <div className="noteContent">
                <Markdown>
                    {post.content}
                </Markdown>
            </div>
            
        </>
        
    )
}
export default NotePage