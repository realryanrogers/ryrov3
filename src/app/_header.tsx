import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
                <ul id="navbar-list-right" className="nav-list navbar-right">
                    <li className="nav-item nav-right"><Link href="https://www.twitter.com/ryroio" target="_blank"><FontAwesomeIcon icon={faTwitter} className="smIcon"/></Link></li>
                    <li className="nav-item nav-right"><Link href="mailto:ryan@ryro.io?subject=Hello!" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="smIcon"/></Link></li>
                </ul>

            </div> 
        </>
    )
}

export default SiteHeader;