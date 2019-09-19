import React, {Component} from 'react'


class ResultsDescription extends Component {
    render () {
        return(
            <section style={{textAlign: 'center'}}>
            <h2>Book Title</h2>
            <p>Author: Dis Author</p>
            <p>Price: $50.00</p>
            <p>This is the description of the book</p>
            </section>
        )
    }
}

export default ResultsDescription