import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div className="postPreviewContainer">
            <div>
                <Link href={`posts/${props.slug}`} className="postPreview">
                    <h2>{props.title}</h2>
                    <p className="standFirst">{props.standFirst}</p>
                </Link>
                <div className="postUnderline">
                    <small>{`${props.date.getFullYear()}-${props.date.getMonth() + 1}-${props.date.getDate() + 1}`}</small>
                    
                </div>
            </div>

                
        </div>
    )
}

export default PostPreview;