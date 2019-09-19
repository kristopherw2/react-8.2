import React, {Component} from 'react'
import BookType from './BookType'
import PrintType from './PrintType'

class Search extends Component {
    render(){
        return (
        <form>            
            <section style={{backgroundColor: 'gray', textAlign:'center',padding: '2px'}}>
                <label style={{margin:'3px'}}>Search:</label>
                <input type="text" defaultValue="Henry"style={{margin:'3px'}}></input>
                <button type="submit"style={{margin:'3px'}}>Search</button>
            </section>
            <section className="drop-downs" style={{backgroundColor:'#d3d3d3', textAlign:'center', padding:'2px', borderBottom: '1px solid black'}}>
                <PrintType />
                <BookType />
            </section>
        </form>            
        )
    }

}

export default Search