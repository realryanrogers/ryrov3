import Link from "next/link";

const NowPage = () => {
    return (
        <div className = "nowContainer">
            <div className="inlineDiv">
                <h2>What I'm Up To Now</h2><Link href="https://nownownow.com/about"><text>[?]</text></Link>
            </div>
            <h3>Game Dev</h3>
            <p>
                Currently working on an as-of-yet unannounced coop action rpg. 
            </p>
            <h3>This Website</h3>
            <p>
                Refamiliarizing myself with Next.js to create this static site to host this page, my notes and writing, and a little backend database for me to play around with.
            </p>
            <h3>Learning In Public</h3>
            <p>
                I've found that the best way to really understand something is to share what you're learning with other people. 
                To that end, I'm maintaining a collection of notes and writings here to help hone in on concepts and hopefully help other people learning as well.
            </p>
            <div className="updated">
                Updated Nov 21st, 2023
            </div>
        </div>
    )
}

export default NowPage;