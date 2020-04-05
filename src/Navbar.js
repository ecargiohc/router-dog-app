import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="something.com">
                    Dog 🐶 App!
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"/>
                </button>
            </nav>
        )
    }
}
export default Navbar;