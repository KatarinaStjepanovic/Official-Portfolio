import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
    const className = props.class;
    const classes = `${className} navbar`;

    return (
        <div>
            <nav className={classes}>
                <ul className="links">
                    <li>
                        <Link className="link" to="/aboutMe" onClick={props.loadingAnim}>About Me </Link>
                    </li>
                    <li>
                        <Link className="link" to="/myWork" onClick={props.loadingAnim}>My Work </Link>

                    </li>
                    <li>
                        <Link className="link" to="/contact" onClick={props.loadingAnim}>Contact</Link>

                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar