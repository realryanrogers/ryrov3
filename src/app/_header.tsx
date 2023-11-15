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
                    <li className="nav-item">Me</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Games</li>
                    <li className="nav-item">Now</li>
                </ul>
            </div> 
        </>
    )
}

export default SiteHeader;