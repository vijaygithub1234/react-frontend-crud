import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
                        <div> <a href="#" className="navbar-brand" >Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
