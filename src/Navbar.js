import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(d => (
            <li className='nav-item'>
            <NavLink exact to={`/dogs/${d.name}`} className="nav-link" key={d.name}>
                {d.name}
            </NavLink>
            </li>
        ));
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
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link exact to='/dogs' className="nav-link">
                                Home!
                            </Link>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;