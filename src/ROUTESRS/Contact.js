import React, { Component } from 'react'

class Contact extends Component {
    render() {
        console.log(this.props)
        const { params } = this.props.match
        return (

            < div >

                <h1>Contact id:</h1>
                <p> {params.id}</p>
            </div >
        )
    }
}

export default Contact
