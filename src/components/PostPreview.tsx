import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    console.log("hell")
    console.log(props.date)
    return (
        <div className="postPreviewContainer">
            <div>
                <Link href={`posts/${props.slug}`} className="postPreview">
                    <h2>{props.title}</h2>
                    <p className="standFirst">{props.standFirst}</p>
                </Link>
                <div className="postUnderline">
                    <small>{`${props.date.getFullYear()}-${props.date.getMonth()}-${props.date.getDate()}`}</small>
                    
                </div>
            </div>

                
        </div>
    )
}

export default PostPreview;