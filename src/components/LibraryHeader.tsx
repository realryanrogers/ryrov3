import Link from "next/link";

const LibraryHeader = (props: any) => {
    console.log(props.active)
    return(
    <div className="libraryHeader">
        <ul>
            <li className="nav-item">FILTER:</li>
            <Link href="/library/"><li className={props.active == "all" ? "nav-item activeNav" : "nav-item"}>ALL</li></Link>
            <Link href="/library/category/game"><li className={props.active == "game" ? "nav-item activeNav" : "nav-item"}>GAMES</li></Link>
            <Link href="/library/category/movie"><li className={props.active == "movie" ? "nav-item activeNav" : "nav-item"}>MOVIES</li></Link>
        </ul>
    </div>
    )
    
}

export default LibraryHeader;