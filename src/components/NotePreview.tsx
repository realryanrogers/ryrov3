import Link from "next/link";
import { NoteMetaData } from "./NoteMetaData";
import Image from "next/image";



const NotePreview = (props: NoteMetaData) => {
    return (
        <Link href={`library/${props.slug}`}>
            <div className="notePreviewContainer">
                <div className="imageContainer">
                    <Image src={props.coverURL} alt="cover" width={100} height={130}/>
                </div>
                <div className="noteInfo">
                    <div className="notePreview">
                        <h2>{props.title}</h2> <small>{props.released.getFullYear()}</small> | <small>Rating: {props.rating}/10</small>
                    </div>
                    <p>
                        {props.noteSummary}
                    </p>     
                </div>       
            </div>
        </Link>
    )
}

export default NotePreview;