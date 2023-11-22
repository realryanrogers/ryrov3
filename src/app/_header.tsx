import Link from "next/link";

const SiteHeader = () => {
    return (
        <>
            <div className="header-text">
                <h1 className="header-title">
                    <a href="/" rel="home">Ryan S Rogers</a>
                </h1>
            </div>
            <div id="navbar" className="header-navbar">
                <ul id="navbar-list" className="nav-list">
                    <li className="nav-item"><Link href="/posts">Writing</Link></li>
                    <li className="nav-item"><Link href="/library">Library</Link></li>
                    <li className="nav-item"><Link href="/about">Me</Link></li>
                    <li className="nav-item"><Link href="/now">Now</Link></li>
                </ul>
            </div> 
        </>
    )
}

export default SiteHeader;