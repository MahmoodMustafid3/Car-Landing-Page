import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLogo">
                EV-olution
            </div>
            <ul className="navMenu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="navContact">Contact</li>
            </ul>
        </div>
    )
}