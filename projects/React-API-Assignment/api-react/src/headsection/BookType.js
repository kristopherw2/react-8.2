import React, {Component} from 'react'

class BookType extends Component {
    render(){
        return (
            <>
                <label htmlFor="book-drop-down"style={{margin:'3px'}}>Book Type:</label>
                <select id="book-drop-down"style={{margin:'3px'}}>
                    <option value="This test1">Testing again1</option>
                    <option value="This test2">Testing again2</option>
                    <option value="This test3">Testing again3</option>
                    <option value="This test3">Testing again4</option>
                </select>
            </>
        )
    }
}

export default BookType