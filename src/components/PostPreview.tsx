import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div>
            <Link href={`posts/${props.slug}`} className="postPreview">
                <h2>{props.title}</h2>
            </Link>
            <p>{props.date}</p>
                
        </div>
    )
}

export default PostPreview;