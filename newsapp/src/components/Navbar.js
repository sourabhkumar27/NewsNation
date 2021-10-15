import React, { Component } from 'react'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#000000"}}>
                    <div className="container-fluid">
                    <img src="https://cdn.dribbble.com/users/1555712/screenshots/5331546/aljazeera-black.gif" style={{width: "4rem", height: "3rem"}} alt="..."/>
                        <a className="navbar-brand" href="/">NewsNation</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar