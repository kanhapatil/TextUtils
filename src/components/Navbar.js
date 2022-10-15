import PropTypes from 'prop-types'
import {Outlet, Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
                <div className="container">
                    <a className="navbar-brand text-white" to="/"><b>TextUtils</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{background : props.mode==="primary"?"":"white"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>

                        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="text-white form-check-label" for="flexSwitchCheckDefault"></label>
                        </div>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}