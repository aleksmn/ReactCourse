import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1" style={{ color: "purple", fontSize: "1.6rem" }}>
                            КликСайт
                            <span className="badge bg-secondary m-1 rounded-pill">{ this.props.totalCounters }</span>
                        </span>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;